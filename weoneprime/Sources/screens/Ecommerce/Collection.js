import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RNCommonHeader, RNContainer } from "../../common";
import { ProductItem } from "../../components";
import { hp, wp } from "../../theme";

const Collection = () => {
  const ListData = Array(9).fill();
  return (
    <RNContainer>
      <RNCommonHeader title={"Collections"} />
      <FlatList
        data={ListData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductItem />}
        contentContainerStyle={{ paddingHorizontal: wp(1) }}
        style={{ paddingTop: hp(2) }}
      />
    </RNContainer>
  );
};

export default Collection;

const styles = StyleSheet.create({});
