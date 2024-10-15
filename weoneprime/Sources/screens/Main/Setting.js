import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { Images } from "../../constants";
import { wp, hp, FontSize, FontFamily, Colors } from "../../theme";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function Setting({ navigation }) {
  const menuOptions = [
    {
      title: "Have a gift/referral code?",
      description: "Save up to ₹500",
      navigation: "ReferralCodeScreen",
    },
    {
      title: "My Transactions",
      description: "View your transaction details",
      navigation: "TransactionsScreen",
    },
    {
      title: "My Favourites",
      description: "Your most loved offers",
      navigation: "Fevorite",
    },
    {
      title: "Rate us 5 star",
      description: "Share your love with us",
      navigation: "RateUsScreen",
    },
    {
      title: "Help Setting",
      description: "Manage your app settings",
      navigation: "SettingsScreen",
    },
    {
      title: "Your Order",
      description: "See your Orders",
      navigation: "OrdersScreen",
    },
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        ...RNStyles.flexRowBetween,
        // backgroundColor: "#F1F1F1",
        borderRadius: 5,
        marginHorizontal: wp(5),
        paddingVertical: hp(2),
        width: wp(94),
        alignSelf: "center",
        marginBottom: hp(1),
        borderBottomWidth: 1,
        borderBottomColor: Colors.LightGrey,
      }}
      onPress={() => navigation.navigate(item.navigation)}
    >
      <View style={{ ...RNStyles.flexRow }}>
        <View style={{ gap: wp(1) }}>
          <RNImage
            source={Images.Bill}
            style={{ width: wp(7), height: wp(7), marginRight: wp(4) }}
          />
        </View>
        <View style={{ gap: wp(1) }}>
          <RNText style={styles.title}>{item.title} </RNText>
          <RNText style={styles.subTitle}>{item.description}</RNText>
        </View>
      </View>
      <View style={{ gap: wp(2) }}>
        <RNText style={styles.title}>+₹276.75</RNText>
        <RNText align={"right"} style={styles.subTitle}>
          Successful
        </RNText>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <StatusBar translucent={true} /> */}
      <LinearGradient
        colors={["#D8E5F1", "#E0DEF2", "#EADEF2", "#F1E2E7"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{ paddingTop: StatusBar.currentHeight + hp(4) }}
      >
        <RNCommonHeader
          title={"My Saving"}
          style={{ backgroundColor: Colors.Transparent, borderBottomWidth: 0 }}
        />
        <View
          style={{
            ...RNStyles.flexRowBetween,
            marginHorizontal: wp(4),
            paddingBottom: hp(2.5),
            borderBottomWidth: 1,
            borderBottomColor: Colors.Placeholder,
          }}
        >
          <View>
            <RNText size={FontSize.font15}>Trial Plan</RNText>
            <RNText size={FontSize.font10}>23 Aug 2024 to 22 Aug 2025</RNText>
          </View>
          <View>
            <RNText size={FontSize.font10}>Total saving</RNText>
            <RNText size={FontSize.font12}>₹5225 </RNText>
          </View>
        </View>
        <View
          style={{
            ...RNStyles.flexRowBetween,
            marginHorizontal: wp(4),
            paddingVertical: hp(1.5),
            borderBottomColor: Colors.Placeholder,
          }}
        >
          <RNText size={FontSize.font10}>Total Balance</RNText>
          <RNText size={FontSize.font12}>₹8555 </RNText>
        </View>
      </LinearGradient>
      <FlatList
        data={menuOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Medium,
    opacity: 0.5,
  },
});
