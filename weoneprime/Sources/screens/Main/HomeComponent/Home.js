import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors, FontFamily, FontSize, hp, wp } from "../../../theme";
import { RNContainer, RNStyles, RNText } from "../../../common";
import { Images } from "../../../constants";
import CreditContainer from "./CreditContainer";

const Home = () => {
  const amenities = [
    {
      id: 1,
      image: Images.banner,
      title: "Amrut",
      subtitle: "The fashion icon",
      subImage: Images.emp_logo,
    },
    {
      id: 2,
      image: Images.banner,
      title: "Inox",
      subtitle: "Live the Movie",
      subImage: Images.emp_logo,
    },
    {
      id: 3,
      image: Images.banner,
      title: "La Pino’z",
      subtitle: "The Giant pizza",
      subImage: Images.emp_logo,
    },
  ];

  return (
    <RNContainer style={styles.container}>
      <ScrollView>
        <CreditContainer />
        <View style={styles.amenitiesContainer}>
          <View style={RNStyles.flexRowBetween}>
            <RNText style={styles.title}>Our Amenities</RNText>
            <TouchableOpacity>
              <RNText
                style={[
                  styles.subTitle,
                  {
                    color: Colors.Grey,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                View All
              </RNText>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollView}
          >
            {amenities.map((item) => (
              <TouchableOpacity key={item.id} style={styles.cardContainer}>
                <Image source={item.image} style={styles.image} />
                <Image source={item.subImage} style={styles.subLogo} />
                <RNText style={styles.cardTitle}>{item.title}</RNText>
                <RNText style={styles.cardSubtitle}>{item.subtitle}</RNText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.subscription}></View>
        <View style={styles.exploreView}></View>
        <View style={styles.transactionView}></View>
        <View style={styles.exploreView}></View>
        <View style={styles.exclusive}></View>
        <View style={styles.newLaunches}></View>
      </ScrollView>
    </RNContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Medium,
  },
  amenitiesContainer: {
    padding: wp(3),
  },
  horizontalScrollView: {
    marginTop: hp(2),
  },
  cardContainer: {
    width: wp(35),
    marginRight: wp(3),
    alignItems: "center",
    position: "relative", 
  },
  image: {
    width: wp(30),
    height: wp(20),
    borderRadius: wp(2),
    opacity: 0.5, 
  },
  subLogo: {
    width: wp(10),
    height: wp(10),
    position: "absolute",
    top: wp(20), 
    left: wp(5),
    borderRadius: wp(5),
  },
  cardTitle: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
    marginTop: hp(1),
  },
  cardSubtitle: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Regular,
    color: Colors.Grey,
  },
});
