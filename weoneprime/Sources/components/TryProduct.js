import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RNText } from "../common";

const TryProduct = () => {
  return (
    <View>
      <Image />
      <View>
        <RNText>Metal Wrist Watches</RNText>
        <RNText>Bestsellers</RNText>
      </View>
      <Image />
    </View>
  );
};

export default TryProduct;

const styles = StyleSheet.create({});
