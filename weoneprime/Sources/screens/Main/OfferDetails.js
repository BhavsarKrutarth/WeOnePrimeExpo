import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
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
const OfferDetails = () => {
  return (
    <RNContainer>
      <RNCommonHeader title={"Company"} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/amrutbanner.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "stretch",
          }}
        />
        <LinearGradient
          start={{ x: 0, y: 1.5 }}
          end={{ x: 0, y: 0 }}
          colors={["white", "white", "#ffffff2b", "transparent"]}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={{
            ...RNStyles.center,
            height: wp(7),
            width: wp(7),
            backgroundColor: "rgba(255, 255, 255, 0.35)",
            position: "absolute",
            top: hp(1),
            borderRadius: 50,
            right: wp(2),
          }}
          //   onPress={() => {
          //     handleHeartPress(item.id), navigation.navigate("Fevorite");
          //   }}
        >
          <Icon
            name={"heart"}
            // solid={isSelected}
            style={{
              fontSize: FontSize.font12,
              color: Colors.Red,
            }}
          />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <RNImage
            source={Images.emp_logo}
            style={{
              height: wp(18),
              width: wp(18),
              backgroundColor: "white",
              borderRadius: wp(18),
            }}
          />
          <Text style={styles.title}>{"Amrut"}</Text>
          <Text style={styles.subtitle}>{"The fashion icon"}</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: wp(5) }}>
        <View
          style={{
            paddingHorizontal: wp(5),
            backgroundColor: Colors.Black,
            paddingVertical: hp(0.5),
            justifyContent: "flex-end",
            alignSelf: "flex-start",
            borderRadius: wp(5),
            marginBottom: hp(2),
          }}
        >
          <RNText
            color={Colors.White}
            size={FontSize.font15}
            family={FontFamily.Medium}
          >
            How to use:
          </RNText>
        </View>
        <RNText size={FontSize.font10}>
          <View
            style={{
              width: normalize(4),
              height: normalize(4),
              backgroundColor: Colors.Black,
              borderRadius: normalize(5),
              marginBottom: hp(0.1),
            }}
          />
          {"    "}
          Generate your unique coupon code
        </RNText>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#d1d1d1",
            borderRadius: normalize(16),
            paddingHorizontal: wp(3),
            paddingVertical: hp(1),
            alignItems: "center",
          }}
        >
          <RNText size={FontSize.font13} family={FontFamily.Medium}>
            15.18
          </RNText>
          <RNText size={FontSize.font10}>
            Reward ready to scan in our shop
          </RNText>
        </View>
        <RNText size={FontSize.font8} color={Colors.DarkGrey} align={"center"}>
          Month End offers: Buy classic woman shuits at Rs. 599 only. Grab this
          offer now.
        </RNText>
      </View>
    </RNContainer>
  );
  n;
};

export default OfferDetails;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "yellow",
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
    bottom: hp(5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: "center",
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
});
