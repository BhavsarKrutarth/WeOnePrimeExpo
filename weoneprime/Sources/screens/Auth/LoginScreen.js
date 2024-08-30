import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RNContainer, RNImage, RNText } from "../../common";
import { hp, wp } from "../../theme";

const LoginScreen = () => {
  return (
    <RNContainer>
      <View style={{ marginTop: 20 }}>
        
        <Image source={require("../../assets/images/Logo.png")} />
        <View>
          <RNText>
            Hey, hello{" "}
            <Image source={require("../../assets/images/WavingHand.png")} />
          </RNText>
        </View>
      </View>
    </RNContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
