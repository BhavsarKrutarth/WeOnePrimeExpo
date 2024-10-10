import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { Images } from "../../constants";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import FetchMethod from "../../api/FetchMethod";
import Animated, {
  FadeIn,
  FadeOut,
  FlipInEasyX,
  FlipOutEasyX,
  LinearTransition,
  ReduceMotion,
  SequencedTransition,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const Fevorite = () => {
  const navigation = useNavigation();
  const [selectedHearts, setSelectedHearts] = useState([]);
  const [data, setData] = useState([]);
  const Data = [
    {
      id: 1,
      image: require("../../assets/images/amrutbanner.png"),
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 2,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Inox",
      subtitle: "Live the movie",
    },
    {
      id: 3,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Coffee Culture",
      subtitle: "The taste of freshness",
    },
    {
      id: 4,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Gollers",
      subtitle: "Gollers locho khaman",
    },
    {
      id: 5,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Coffee Culture",
      subtitle: "The taste of freshness",
    },
    {
      id: 6,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Gollers",
      subtitle: "Gollers locho khaman",
    },
  ];

  const handleHeartPress = (id) => {
    const newData = data.filter((data) => data.MyFavoritesid !== id);
    setData(newData);
  };

  useEffect(() => {
    getFevData();
  }, []);

  const getFevData = async () => {
    try {
      const response = await FetchMethod.GET({
        EndPoint: `FavoritesData?UserLoginid=${1}`,
      });
      setData(response);
      // console.log("response", JSON.stringify(response, null, 2));
    } catch (error) {
      console.log("error fetching favorites", error);
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedHearts.includes(item.MyFavoritesid);

    return (
      <Animated.View
        layout={LinearTransition}
        exiting={FadeOut}
        style={styles.card}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("OfferDetails", {
              companyId: item.Company.WP_Companyid,
            })
          }
        >
          <Image
            source={{ uri: item?.Company?.CompanyImage }}
            style={styles.image}
          />
          <LinearGradient
            start={{ x: 0, y: 1.2 }}
            end={{ x: 0, y: 0 }}
            colors={["white", "transparent"]}
            style={styles.gradient}
          />
          <TouchableOpacity
            style={{
              ...RNStyles.center,
              height: wp(7),
              width: wp(7),
              backgroundColor: isSelected
                ? "rgba(222, 33, 39, 0.5)"
                : "rgba(255, 255, 255, 0.35)",
              position: "absolute",
              top: hp(1),
              borderRadius: 50,
              right: wp(2),
            }}
            onPress={() => {
              handleHeartPress(item.MyFavoritesid),
                navigation.navigate("Fevorite");
            }}
          >
            <Icon
              name={"heart"}
              solid={isSelected}
              style={{
                fontSize: FontSize.font12,
                color: isSelected ? Colors.Red : Colors.White,
              }}
            />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <RNImage
              source={{ uri: item?.Company?.CompanyLogo }}
              style={{ height: wp(13), width: wp(13) }}
            />
            <Text style={styles.title}>{item?.Company?.CompanyName}</Text>
            <Text style={styles.subtitle}>
              {item.Company.CompanysDescription}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <RNContainer>
      <RNCommonHeader title={"My Fevorite"} />
      {data.length != 0 ? (
        <View style={styles.ExploreData}>
          <FlatList
            style={{ paddingTop: hp(2), flex: 1 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: hp(1.5) }} />}
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={Images.nodata}
            style={{
              width: wp(30),
              height: wp(30),
              resizeMode: "contain",
              marginBottom: hp(2),
            }}
          />
          <RNText>Your Favorites list is empty!</RNText>
          <RNText
            pVertical={hp(1)}
            pHorizontal={wp(10)}
            family={FontFamily.Regular}
            color={Colors.DarkGrey}
            align={"center"}
            size={FontSize.font10}
          >
            Explore weone prime and mask benefits as favorites. we will save the
            for you here.
          </RNText>
        </View>
      )}
    </RNContainer>
  );

  // return (
  //   <RNContainer>
  //     <RNCommonHeader title={"My Fevorite"} />
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <Image
  //         source={Images.nodata}
  //         style={{
  //           width: wp(30),
  //           height: wp(30),
  //           resizeMode: "contain",
  //           marginBottom: hp(2),
  //         }}
  //       />
  //       <RNText>Your Favorites list is empty!</RNText>
  //       <RNText
  //         pVertical={hp(1)}
  //         pHorizontal={wp(10)}
  //         family={FontFamily.Regular}
  //         color={Colors.DarkGrey}
  //         align={"center"}
  //         size={FontSize.font10}
  //       >
  //         Explore weone prime and mask benefits as favorites. we will save the
  //         for you here.
  //       </RNText>
  //     </View>
  //   </RNContainer>
  // );
};

export default Fevorite;

const styles = StyleSheet.create({
  ExploreData: {
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: "center",
  },
  card: {
    borderRadius: wp(2),
    width: wp(45),
    height: wp(42),
    marginHorizontal: wp(1.5),
    overflow: "hidden",
  },
  image: {
    width: wp(45),
    height: wp(45),
    resizeMode: "center",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
  },
  infoContainer: {
    position: "absolute",
    bottom: hp(-0.5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  subtitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    marginBottom: hp(1),
    color: Colors.Grey,
  },
});
