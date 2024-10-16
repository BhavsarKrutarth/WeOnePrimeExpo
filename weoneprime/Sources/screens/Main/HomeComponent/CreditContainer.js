import React from "react";
import { View, TouchableOpacity, ImageBackground, StyleSheet, Image } from "react-native";
import { RNImage, RNText, RNStyles, RNContainer } from "../../../common";
import { Images } from "../../../constants";
import { Colors, FontFamily, FontSize, hp, wp } from "../../../theme";

const CreditContainer = ({ data }) => {
  const { singelBanner, moneyMatter } = data || {};
  const balance = moneyMatter?.Balance || 0;
  const bannerImage = singelBanner?.SubDetails[0]?.BannerImage;

  return (
    <RNContainer style={styles.container}>
      <View style={{paddingVertical: hp(3), gap: hp(3)}}>
        <Image style={styles.creditContainer} source={{ uri: bannerImage }} />
      </View>

      <View style={styles.content}>
        <RNText style={styles.title}>Money Matters</RNText>
        <ImageBackground source={Images.Effect} style={styles.leftImage} resizeMode="contain" />
        <ImageBackground source={Images.Effect2} style={styles.rightImage} resizeMode="contain" />

        <View style={styles.amenitiesContents}>
          <View style={{ ...RNStyles.flexRow, gap: wp(2)}}>
            <RNImage source={Images.Rupee} style={{width: wp(8), height: wp(8)}} />
            <RNText style={styles.subTitle}>WEONE Prime Credit</RNText>
          </View>
          <View style={{ ...RNStyles.flexRow, gap: wp(2)}}>
            <RNText style={styles.subTitle}>₹{balance}</RNText>
            <RNImage source={Images.RightIcon} style={{ width: wp(2.5), height: wp(2.5)}} />
          </View>
        </View>
      </View>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  creditContainer: {
    width: wp(94),
    height: hp(9),
    borderRadius: 6,
    alignSelf: 'center'
  },
  content: {
    gap: hp(1),
    alignItems: "center",
    paddingBottom: hp(2)
  },
  amenitiesContents: {
    ...RNStyles.flexRowBetween,
    backgroundColor: "#ECECEC",
    borderRadius: 5,
    paddingHorizontal: wp(3),
    paddingVertical: wp(2),
    width: wp(94),
  },
  title: {
    alignSelf: "flex-start",
    paddingHorizontal: wp(3),
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Medium,
  },
  leftImage: {
    width: wp(20),
    height: hp(9),
    position: "absolute",
    top: hp(3.5),
    left: wp(-2),
  },
  rightImage: {
    width: wp(20),
    height: hp(9),
    position: "absolute",
    top: hp(3.5),
    right:  wp(-2),
  },
});

export default CreditContainer;
