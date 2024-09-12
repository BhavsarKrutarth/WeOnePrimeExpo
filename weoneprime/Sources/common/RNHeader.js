import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Colors,
  FontFamily,
  FontSize,
  hp,
  isIOS,
  useCustomFonts,
  wp,
} from "../theme";
import RNText from "./RNText";
import RNStyles from "./RNStyles";

const RNHeader = ({
  title,
  onLeftPress,
  LeftIcon,
  onRightPress,
  RightIcon,
  containerStyle,
  titleStyle,
  leftIconStyle,
  rightIconStyle,
}) => {
  useCustomFonts();
  const navigation = useNavigation();
  return (
    <View style={[styles.Container, containerStyle]}>
      {LeftIcon ? (
        <TouchableOpacity
          onPress={() => (onLeftPress ? onLeftPress?.() : navigation.goBack())}
          style={styles.Left}
          hitSlop={20}
        >
          <Image
            source={LeftIcon}
            resizeMode={"contain"}
            style={[RNStyles.image90, leftIconStyle]}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.Left} />
      )}
      <RNText style={[styles.title, titleStyle]}>{title}</RNText>
      {RightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.Right}>
          <Image
            source={RightIcon}
            resizeMode={"contain"}
            style={[RNStyles.image90, rightIconStyle]}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.Right} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.flexRowBetween,
    backgroundColor: Colors.White,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    paddingTop: isIOS ? hp(6) : hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  Left: {
    ...RNStyles.center,
    width: wp(9),
    height: wp(6),
  },
  title: {
    flex: 1,
    textAlign: "center",
    paddingHorizontal: hp(1),
    marginHorizontal: hp(1),
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Medium,
  },
  Right: {
    ...RNStyles.center,
    width: wp(6),
    height: wp(6),
  },
});

export default RNHeader;
