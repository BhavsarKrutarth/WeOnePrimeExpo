import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
  const [modalVisible, setModalVisible] = useState(false);
  const sections = [
    { id: "1", title: "About" },
    { id: "2", title: "Terms & Conditions" },
    { id: "3", title: "FAQs" },
  ];

  const sectionContent = {
    About:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Terms & Conditions": "These are the terms and conditions.",
    FAQs: "Here are the frequently asked questions.",
  };

  const renderSectionItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.sectionButton,
        selectedSection === item.title && { backgroundColor: Colors.LightGrey },
      ]}
      onPress={() => setSelectedSection(item.title)}
    >
      <Text style={[styles.sectionText]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleOffer = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
                onPress={handleOffer}
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

        <View
          style={{
            marginVertical: hp(2),
            gap: wp(3),
            paddingHorizontal: wp(3),
          }}
        >
          <FlatList
            horizontal
            data={sections}
            renderItem={renderSectionItem}
            keyExtractor={(item) => item.id}
            style={styles.SectionList}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.contentContainer}>
            <RNText style={styles.sectionContent}>
              {sectionContent[selectedSection]}
            </RNText>
          </View>
        </View>

        <View style={styles.OfferDetails}>
          <RNText style={[styles.sectionContent, { textAlign: "center" }]}>
            Join weone prime to avail this offer
          </RNText>
          <RNButton
            title={
              <RNText style={styles.buttonText}>
                EXTEND MEMBERSHIP FOR{" "}
                <RNText
                  style={[
                    styles.buttonText,
                    { textDecorationLine: "line-through" },
                  ]}
                >
                  ₹1299{" "}
                </RNText>
                ₹999
              </RNText>
            }
            textStyle={styles.buttonText}
            gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
          />
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <LinearGradient
                  colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
                  start={{ x: 0.5, y: 1.2 }}
                  end={{ x: 0, y: 0 }}
                  style={{
                    height: wp(9),
                    width: wp(9),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: normalize(6),
                  }}
                >
                  <RNImage
                    style={{ height: wp(6), width: wp(6) }}
                    source={Images.scan}
                  />
                </LinearGradient>
                <RNText style={styles.sectionText}>Redeem in Showroom?</RNText>
                <RNText size={FontSize.font8} color={Colors.DarkGrey}>
                  scan code at a restaurant within 15 minutes.
                </RNText>
                <View style={[RNStyles.flexRowCenter, { gap: wp(3) }]}>
                  <RNButton
                    style={{
                      backgroundColor: Colors.Black,
                      paddingHorizontal: wp(15),
                      paddingVertical: hp(1),
                    }}
                    textStyle={{
                      fontSize: FontSize.font11,
                      fontFamily: FontFamily.Medium,
                    }}
                    title="Cancel"
                    onPress={closeModal}
                  />
                  <RNButton
                    style={{
                      backgroundColor: Colors.LightGrey,
                      paddingHorizontal: wp(15),
                      paddingVertical: hp(1),
                    }}
                    textStyle={{
                      fontSize: FontSize.font11,
                      fontFamily: FontFamily.Medium,
                      color: Colors.Black,
                    }}
                    title="Redeem"
                    onPress={closeModal}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    borderColor: "#D1D1D1",
    borderRadius: normalize(16),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    alignItems: "center",
    marginVertical: hp(1),
  },
  sectionButton: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(5),
    borderRadius: wp(2),
    marginRight: wp(1),
  },
  SectionList: {
    alignSelf: "center",
  },
  sectionText: {
    fontSize: FontSize.font14,
    color: Colors.Black,
    fontFamily: FontFamily.SemiBold,
  },
  sectionContent: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
    color: Colors.DarkGrey,
  },
  contentContainer: {
    borderRadius: wp(2),
    alignSelf: "center",
  },
  OfferDetails: {
    padding: wp(3),
    backgroundColor: Colors.LightGrey,
    width: wp(100),
    borderTopStartRadius: normalize(10),
    borderTopEndRadius: normalize(10),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.White,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    gap: hp(1),
  },
});
