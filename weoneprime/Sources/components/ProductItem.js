import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors, FontFamily, FontSize, hp, wp } from "../theme";
import { RNText } from "../common";

const ProductItem = () => {
  return (
    <View style={styles.productItem}>
      <View style={styles.imageView}>
        <Image
          style={{ width: "100%", height: "80%", backgroundColor: "white" }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/9514/205e/c021e99f0dbb63be149add8d4e992bd1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xcf-whZEnFps-h~dVW5lwDW4bDvRBJwJ5svpGoI~zUoDwbVuyBlXqfZXM91CPvKd1LZ~sR97SsUbqwvx5iWou2jImdsmKy7Hhev6CNTNFX~B2t~ucd6g0Z7lX-uS77KcAkydz2vf-aiOk-ETh60mmgq~k46SVhpFmhtEJbAyyzqX1TXRxbIuDPtJ0ocBnG7KXAFvI3WvOSdHYANaVCyl4f5CkwLmlzMwj9fyb1N3mJdfpSpFmex~6v2OA483-2g~4-tkvVrFZDlT-zImV4uHqiFH7CDwu0Tt55A7nVSx0U0Tf4qmI9TJWT-BvclWkteUPKBzIfnxnpAZCe30JC-D2A__",
          }}
          resizeMode="contain"
        />
      </View>
      <RNText
        size={FontSize.font10}
        color={Colors.DarkGrey}
        family={FontFamily.Light}
      >
        Blue, Fast Charging for Mobile
      </RNText>
      <RNText
        family={FontFamily.Medium}
        size={FontSize.font11}
        pVertical={hp(0.5)}
      >
        SmartBuy 10000 mAh 12 W Power bank
      </RNText>
      <RNText family={FontFamily.Medium} size={FontSize.font11}>
        ₹999{"   "}
        <RNText
          family={FontFamily.Medium}
          size={FontSize.font11}
          color={Colors.DarkGrey}
          style={{ textDecorationLine: "line-through" }}
        >
          ₹1599
        </RNText>
        <RNText size={FontSize.font11} color={"#FF696C"}>
          {"       "}53%off
        </RNText>
      </RNText>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    width: wp(45),
    height: hp(35),
    backgroundColor: "white",
    borderColor: Colors.D9D9D9,
    backgroundColor: Colors.White,
    marginBottom: hp(2),
    marginHorizontal: wp(2),
  },
  imageView: {
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.D9D9D9,
    overflow: "hidden",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
