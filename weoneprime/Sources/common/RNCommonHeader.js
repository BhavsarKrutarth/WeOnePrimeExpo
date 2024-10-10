import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors, FontFamily, FontSize, wp } from "../theme";
import RNText from "./RNText";
import { Images } from "../constants";
import { useNavigation } from "@react-navigation/native";
import RNContainer from "./RNContainer";

const RNCommonHeader = ({ title, style }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity
        style={{ padding: wp(4) }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={Images.Back}
          style={{ width: wp(4), height: wp(4), resizeMode: "contain" }}
        />
      </TouchableOpacity>
      <RNText size={FontSize.font14} family={FontFamily.Medium}>
        {title}
      </RNText>
      <TouchableOpacity style={{ padding: wp(4) }}>
        <Image
          source={null}
          style={{ width: wp(3), height: wp(3), resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RNCommonHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingBottom: hp(1.5),
    backgroundColor: Colors.White,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
});
