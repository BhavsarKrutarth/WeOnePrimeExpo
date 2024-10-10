import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RNContainer, RNImage, RNStyles, RNText } from "../../common";
import { Images } from "../../constants";
import { wp, hp, FontSize, FontFamily } from "../../theme";
import { FlatList } from "react-native-gesture-handler";

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
        backgroundColor: "#F1F1F1",
        borderRadius: 5,
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        width: wp(94),
        alignSelf: "center",
        marginBottom: hp(1),
      }}
      onPress={() => navigation.navigate(item.navigation)}
    >
      <View style={{ gap: wp(1) }}>
        <RNText style={styles.title}>{item.title} </RNText>
        <RNText style={styles.subTitle}>{item.description}</RNText>
      </View>
      <View style={{ gap: wp(2) }}>
        <RNImage
          source={Images.RightIcon}
          style={{ width: wp(3), height: wp(3) }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <RNContainer>
      <FlatList
        data={menuOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </RNContainer>
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
