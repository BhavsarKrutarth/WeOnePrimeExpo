import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  RNButton,
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OfferDetails = () => {
  const [selectedSection, setSelectedSection] = useState("About");

  const sections = [
    { id: "1", title: "About" },
    { id: "2", title: "Terms & Conditions" },
    { id: "3", title: "FAQs" },
  ];

  const sectionContent = {
    About: "This is the about section content.",
    "Terms & Conditions": "These are the terms and conditions.",
    FAQs: "Here are the frequently asked questions.",
  };

  const renderSectionItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.sectionButton,
        selectedSection === item.title && { backgroundColor: "#ECECEC" },
      ]}
      onPress={() => setSelectedSection(item.title)}
    >
      <Text style={[styles.sectionText]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <RNContainer>
      <RNCommonHeader title={"Company"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/amrutbanner.png")}
            style={styles.bannerImage}
          />
          <LinearGradient
            start={{ x: 0, y: 1.5 }}
            end={{ x: 0, y: 0 }}
            colors={["white", "white", "#ffffff2b", "transparent"]}
            style={styles.gradient}
          />
          <TouchableOpacity style={styles.heartIcon}>
            <Icon
              name={"heart"}
              style={{ fontSize: FontSize.font12, color: Colors.Red }}
            />
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <RNImage source={Images.emp_logo} style={styles.logo} />
            <Text style={styles.title}>{"Amrut"} </Text>
            <Text style={styles.subtitle}>{"The fashion icon"} </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: wp(5) }}>
          <View style={styles.howToUseContainer}>
            <RNText
              color={Colors.White}
              size={FontSize.font15}
              family={FontFamily.Medium}
            >
              How to use:{" "}
            </RNText>
          </View>
          <RNText size={FontSize.font10}>
            <View style={styles.bulletPoint} />
            {"    "}
            Generate your unique coupon code
          </RNText>
          <View style={styles.rewardContainer}>
            <View style={RNStyles.flexRow}>
              <MaterialCommunityIcons
                name={"clock-time-three-outline"}
                style={{ fontSize: FontSize.font14 }}
              />
              <RNText size={FontSize.font13} family={FontFamily.Medium}>
                15.18
              </RNText>
            </View>
            <RNText size={FontSize.font10}>
              Reward ready to scan in our shop
            </RNText>

            <View>
              <RNButton
                title="Scan Now"
                style={{ paddingVertical: hp(1), marginTop: hp(2) }}
                textStyle={styles.buttonText}
                gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
              />
            </View>
          </View>
          <RNText
            size={FontSize.font8}
            color={Colors.DarkGrey}
            align={"center"}
          >
            Month End offers: Buy classic woman suits at Rs. 599 only. Grab this
            offer now.
          </RNText>
        </View>

        <View style={{ marginVertical: hp(2) }}>
          <FlatList
            horizontal
            data={sections}
            renderItem={renderSectionItem}
            keyExtractor={(item) => item.id}
            style={styles.SectionList}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.contentContainer}>
            <RNText size={FontSize.font13} family={FontFamily.Medium}>
              {sectionContent[selectedSection]}
            </RNText>
          </View>
        </View>
      </ScrollView>
    </RNContainer>
  );
};

export default OfferDetails;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: hp(70),
    backgroundColor: "yellow",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
  },
  heartIcon: {
    ...RNStyles.center,
    height: wp(7),
    width: wp(7),
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    position: "absolute",
    top: hp(1),
    borderRadius: 50,
    right: wp(2),
  },
  infoContainer: {
    position: "absolute",
    bottom: hp(5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: "center",
  },
  logo: {
    height: wp(18),
    width: wp(18),
    backgroundColor: "white",
    borderRadius: wp(18),
  },
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
    marginTop: hp(1),
  },
  subtitle: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Light,
    color: Colors.Black,
    marginTop: hp(0.5),
  },
  buttonText: {
    fontSize: FontSize.font13,
    color: Colors.White,
    fontFamily: FontFamily.Medium,
  },
  howToUseContainer: {
    paddingHorizontal: wp(5),
    backgroundColor: Colors.Black,
    paddingVertical: hp(0.5),
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    borderRadius: wp(5),
    marginBottom: hp(2),
  },
  bulletPoint: {
    width: normalize(4),
    height: normalize(4),
    backgroundColor: "#D1D1D1",
    borderRadius: normalize(5),
    marginBottom: hp(0.1),
  },
  rewardContainer: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: normalize(16),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    alignItems: "center",
    marginVertical: hp(1),
  },
  sectionButton: {
    padding: wp(3),
    marginRight: wp(3),
    borderRadius: wp(2),
    backgroundColor: Colors.LightGrey,
  },
  SectionList: {
    alignSelf: "center",
  },
  sectionText: {
    fontSize: FontSize.font14,
    color: Colors.Black,
    fontFamily: FontFamily.SemiBold,
  },
  contentContainer: {
    backgroundColor: Colors.LightGrey,
    borderRadius: wp(2),
    alignSelf: "center",
  },
});
