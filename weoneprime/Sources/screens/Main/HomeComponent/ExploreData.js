import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { RNImage, RNText } from "../../../common";
import { Images } from "../../../constants";
import { Colors, FontFamily, FontSize, hp, wp } from "../../../theme";
import { LinearGradient } from "expo-linear-gradient";

export default function ExploreData({ data }) {
  const Data = data?.SubDetails || [
    {
      id: 1,
      image: Images.exploreimg,
      subtitle: "Flat 50% Off on Seasoning combo of 3",
      price: "Worth ₹450",
    },
    {
      id: 2,
      image: Images.exploreimg,
      subtitle: "Flat 50% Off on Seasoning combo of 3",
      price: "Worth ₹450",
    },
    {
      id: 3,
      image: Images.exploreimg,
      subtitle: "Flat 50% Off on Seasoning combo of 3",
      price: "Worth ₹450",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <Image source={item.BannerImage} style={styles.image} />
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["white", "transparent"]}
        style={styles.gradient}
      />
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.availButton}>
          <Text style={styles.availText}>Avail Now </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>{item.ExploreMoreOfferDesc}</Text>
        <View
          style={{ width: 50, height: 1, backgroundColor: Colors.DarkGrey }}
        />
        <Text style={styles.price}>Worth {item.price || "₹0"}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.ExploreData}>
      <View style={{ paddingLeft: wp(3) }}>
        <RNText style={styles.title}>
          Explore More Off...
          <RNImage style={styles.exploreIcon} source={Images.ExploreData} />
        </RNText>
        <RNText style={styles.subTitle}>
          Reference site about Lorem Ipsum.
        </RNText>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ExploreData: {
    gap: hp(2),
    marginTop: hp(2),
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  exploreIcon: {
    width: wp(5),
    height: wp(5),
    marginLeft: wp(1),
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    color: Colors.DarkGrey,
  },
  card: {
    backgroundColor: Colors.White,
    borderRadius: wp(3),
    overflow: "hidden",
    width: wp(40),
    height: hp(28),
    position: "relative",
    marginLeft: wp(3),
  },
  image: {
    width: wp(40),
    height: hp(28),
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(35),
  },
  infoContainer: {
    position: "absolute",
    bottom: hp(-0.5),
    left: wp(3),
    right: wp(2),
    gap: hp(0.5),
    zIndex: 100,
  },
  availButton: {
    backgroundColor: Colors.Black,
    paddingVertical: wp(0.5),
    paddingHorizontal: wp(2),
    borderRadius: wp(1.5),
    alignSelf: "flex-start",
    marginBottom: wp(1),
    borderWidth: 1,
    borderColor: Colors.Purple,
  },
  availText: {
    fontSize: FontSize.font10,
    color: Colors.White,
    fontFamily: FontFamily.Medium,
  },
  subtitle: {
    fontSize: FontSize.font9,
    width: wp(35),
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
    marginBottom: wp(1),
  },
  price: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Light,
    color: Colors.Black,
    borderTopWidth: 1,
    borderTopColor: Colors.Grey,
    width: wp(18),
    paddingVertical: hp(0.5),
  },
});
