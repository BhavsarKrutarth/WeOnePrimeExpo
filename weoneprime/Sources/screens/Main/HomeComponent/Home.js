import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Colors, hp } from "../../../theme";
import { RNContainer, RNStyles } from "../../../common";
import CreditContainer from "./CreditContainer";
import AmenitiesData from "./amenitiesData";
import ExploreData from "./ExploreData";
import RecentTransactions from "./RecentTransactions";
import NewLaunch from "./NewLaunch";
import Exclusive from "./Exclusive";
import FetchMethod from "../../../api/FetchMethod";
import URL from "../../../api/URL";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await FetchMethod.GET({
        EndPoint: `${
          URL.HomeScreenUrl
        }?UserLoginid=${1}&TotalRecored=${5}&PageIndex=${10}&PageCount=${1}`,
      });
      console.log(data); 
      setData(data);
    } catch (error) {
      console.log("Error in fetching data:", error);
    }
  };

  console.log(JSON.stringify(data, null, 2));

  return (
    <RNContainer style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreditContainer
          data={{ singelBanner: data[0], moneyMatter: data[1] }}
        />
        <AmenitiesData data={data[2]} />
        <ExploreData data={data[4]} />
        <RecentTransactions />
        <Exclusive data={data[7]} dataLength={data[7]?.SubDetails?.length} />
        <NewLaunch />
      </ScrollView>
    </RNContainer>
  );
};

const styles = StyleSheet.create({});

export default Home;
