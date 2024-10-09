import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { FontFamily, FontSize, hp, wp, Colors } from "../../../theme";
import { RNImage, RNText, RNStyles } from "../../../common";
import { Images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const AmenitiesData = ({ data }) => {
  const navigation = useNavigation();
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

  return (
    <View style={styles.amenitiesContainer}>
      <View style={RNStyles.flexRowBetween}>
        <RNText style={styles.title}>Our Amenities </RNText>
        <TouchableOpacity onPress={() => navigation.navigate("Amenity")}>
          <RNText style={styles.subTitle}>View All </RNText>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollView}
      >
        {amenities.map((item, index) => (
          <Pressable key={index} style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <RNImage
                source={{ uri: item.CompanyImage }}
                style={styles.image}
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
              <RNText style={styles.cardSubtitle}>
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
    opacity: 0.5,
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
});

export default AmenitiesData;
