import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontFamily, FontSize, hp, wp, Colors, width } from "../../../theme";
import { RNImage, RNText, RNStyles } from "../../../common";
import { Images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import FetchMethod from "../../../api/FetchMethod";
import { getBalanceData } from "../../../redux/ExtraReducers";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";

const AmenitiesData = ({ data }) => {
  const navigation = useNavigation();
  const [balances, setBalances] = useState({});
  const [likedIndices, setLikedIndices] = useState([]);
  const dispatch = useDispatch();

  const amenities = data?.SubDetails || [
    {
      id: 1,
      image: Images.exclusive1,
      title: "Amrut",
      subtitle: "The fashion icon ",
      subImage: Images.emp_logo,
    },
    {
      id: 2,
      image: Images.banner,
      title: "Inox",
      subtitle: "Live the Movie ",
      subImage: Images.emp_logo,
    },
    {
      id: 3,
      image: Images.banner,
      title: "La Pino’z",
      subtitle: "The Giant pizza ",
      subImage: Images.emp_logo,
    },
  ];

  useEffect(() => {
    dispatch(getBalanceData());
  }, []);

  const onLikeButtonPress = async (index, WP_Companyid) => {
    const isLiked = likedIndices.includes(index);
    setLikedIndices((prev) =>
      isLiked
        ? prev.filter((likedIndex) => likedIndex !== index)
        : [...prev, index]
    );
    try {
      if (!isLiked) {
        const endpoint = `FavoritesData?UserLoginid=1&WP_Companyid=${WP_Companyid}`;
        const response = await FetchMethod.POST({
          EndPoint: endpoint,
        });
        console.log(response);
      }
    } catch (error) {
      console.error("Error updating favorites: ", error);
    }
  };

  const fetchBalances = async () => {
    try {
      const balance = await FetchMethod.GET({
        EndPoint: `Membership`,
      });
      setBalances(balance);
      console.log("ajsakSKAHsh", balance);
    } catch (error) {
      console.log("error fetch -->", error);
    }
    // Fetching balances from API
  };

  return (
    <View style={styles.amenitiesContainer}>
      <View style={RNStyles.flexRowBetween}>
        <RNText style={styles.title}>Our Amenities </RNText>
        <TouchableOpacity onPress={() => navigation.navigate("Amenity")}>
          <RNText style={styles.subTitle}>View All</RNText>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollView}
      >
        {amenities.map((item, index) => (
          <Pressable
            key={index}
            style={styles.cardContainer}
            onPress={() =>
              navigation.navigate("OfferDetails", {
                companyId: item.WP_Companyid,
                balanceData: balances,
              })
            }
          >
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.likeButton}
                onPress={() => onLikeButtonPress(index, item.WP_Companyid)}
              >
                <Icon
                  name={"heart"}
                  style={{
                    fontSize: FontSize.font12,
                    color: likedIndices.includes(index) ? "red" : Colors.White,
                  }}
                />
              </TouchableOpacity>
              <RNImage
                source={{ uri: item.companyBanner }}
                style={styles.image}
                resizeMode={"cover"}
              />
              <View style={styles.subImageContainer}>
                <View style={styles.subImageWrapper}>
                  <RNImage
                    source={{ uri: item.CompanyLogo }}
                    style={styles.subLogo}
                  />
                </View>
              </View>
            </View>
            <View style={styles.textContainer}>
              <RNText style={styles.cardTitle}>{item.CompanyName}</RNText>
              <RNText
                numOfLines={1}
                style={[styles.cardSubtitle, { width: wp(20) }]}
              >
                {item.CompanysDescription}
              </RNText>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Medium,
    color: Colors.DarkGrey,
    textDecorationLine: "underline",
  },
  amenitiesContainer: {
    marginTop: hp(2),
    paddingHorizontal: wp(3),
    gap: hp(1),
  },
  cardContainer: {
    marginRight: wp(3),
    alignItems: "center",
  },
  imageContainer: {
    width: wp(40),
    height: hp(12),
    backgroundColor: Colors.Black,
    borderRadius: 5,
  },
  image: {
    width: wp(40),
    height: hp(12),
    borderRadius: 5,
    opacity: 0.50,
  },
  subImageContainer: {
    position: "absolute",
    bottom: -wp(10),
    left: wp(2),
  },
  subImageWrapper: {
    height: wp(13),
    width: wp(13),
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 5,
    ...RNStyles.center,
  },
  subLogo: {
    width: wp(12),
    height: wp(12),
  },
  textContainer: {
    marginBottom: hp(2),
    marginTop: hp(0.5),
    marginLeft: wp(12),
  },
  cardTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.SemiBold,
  },
  cardSubtitle: {
    fontSize: 9,
    fontFamily: FontFamily.Regular,
    color: Colors.Grey,
  },
  likeButton: {
    ...RNStyles.center,
    height: wp(6),
    width: wp(6),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    position: "absolute",
    top: hp(0.5),
    borderRadius: 50,
    right: wp(1),
  },
});

export default AmenitiesData;
