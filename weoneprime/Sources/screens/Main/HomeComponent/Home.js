import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Colors, hp, normalize, wp } from "../../../theme";
import { RNContainer, RNHeader, RNStyles } from "../../../common";
import CreditContainer from "./CreditContainer";
import AmenitiesData from "./amenitiesData";
import ExploreData from "./ExploreData";
import RecentTransactions from "./RecentTransactions";
import NewLaunch from "./NewLaunch";
import Exclusive from "./Exclusive";
import FetchMethod from "../../../api/FetchMethod";
import URL from "../../../api/URL";
import { useSelector } from "react-redux";
import { Images } from "../../../constants";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const { AsyncValue } = useSelector(({ Auth }) => Auth);
  console.log(data);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await FetchMethod.GET({
        EndPoint: `${
          URL.HomeScreenUrl
        }?UserLoginid=${1}&TotalRecored=${5}&PageIndex=${1}&PageCount=${5}`,
      });
      setData(data);
    } catch (error) {
      console.log("Error in fetching data:", error);
    }
  };

  return (
    <RNContainer style={{ flex: 1 }}>
      <RNHeader
        LeftIcon={Images.Weoneprime}
        RightIcon={{ uri: AsyncValue.UserImage }}
        containerStyle={{ paddingLeft: wp(13) }}
        rightIconStyle={{ width: wp(8), height: wp(8), borderRadius: normalize(50) }}
        leftIconStyle={{ width: wp(30) }}
        subDesc={"Around You"}
        username={AsyncValue.UserName}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreditContainer
          data={{ singelBanner: data[0], moneyMatter: data[1] }}
        />
        <AmenitiesData data={data[2]} />
        <ExploreData data={data[4]} />
        <RecentTransactions data={data[5]} />
        <Exclusive data={data[7]} dataLength={data[7]?.SubDetails?.length} />
        <NewLaunch data={data} />
      </ScrollView>
    </RNContainer>
  );
};

const styles = StyleSheet.create({});

export default Home;
