import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Colors, hp } from "../../../theme";
import { RNContainer, RNStyles } from "../../../common";
import CreditContainer from "./CreditContainer";
import AmenitiesData from "./amenitiesData";
import ExploreData from "./ExploreData";
import RecentTransactions from "./RecentTransactions";
import NewLaunch from "./NewLaunch";
import Exclusive from "./Exclusive";

const Home = () => {
  return (
    <RNContainer style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreditContainer />
        <AmenitiesData />
        <ExploreData />
        <RecentTransactions />
        <Exclusive />
        <NewLaunch />
      </ScrollView>
    </RNContainer>
  );
};

const styles = StyleSheet.create({});

export default Home;
