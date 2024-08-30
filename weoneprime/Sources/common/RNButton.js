import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors, FontFamily, FontSize, hp, wp } from "../theme";
import RNStyles from "./RNStyles";
import RNText from "./RNText";
import { LinearGradient } from "expo-linear-gradient";

const RNButton = ({ title, style, textStyle, onPress, disable, gradientColors }) => {
  const renderButtonContent = () => (
    <RNText style={[styles.buttonText, textStyle]}>{title}</RNText>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disable}
      style={styles.Container}
    >
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          style={[styles.gradient, style]}
          start={{ x: 1.2, y: 0 }}
          end={{ x: 0, y: 0 }}
        >
          {renderButtonContent()}
        </LinearGradient>
      ) : (
        <View style={[styles.solidBackground, style]}>
          {renderButtonContent()}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderRadius: wp(3), 
    overflow: 'hidden',
  },
  gradient: {
    ...RNStyles.center,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: wp(3),
  },
  solidBackground: {
    ...RNStyles.center,
    backgroundColor: Colors.Primary,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: wp(3),
  },
  buttonText: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Medium,
    color: Colors.White,
  },
});

export default RNButton;
