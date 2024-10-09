import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { RNImage, RNText, RNStyles, RNContainer } from "../../../common";
import { Images } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, FontFamily, FontSize, hp, wp } from "../../../theme";

const CreditContainer = ({ data }) => {
  const amenities = [
    {
      id: 1,
      image: Images.exclusive1,
      title: "Amrut",
      subtitle: "The fashion icon ",
      subImage: Images.emp_logo,
    },
    {
      id: 2,
      image: Images.banner,
      title: "Inox",
      subtitle: "Live the Movie ",
      subImage: Images.emp_logo,
    },
    {
      id: 3,
      image: Images.banner,
      title: "La Pino’z",
      subtitle: "The Giant pizza ",
      subImage: Images.emp_logo,
    },
  ];

  const Data = [
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

  const transactions = [
    {
      id: 1,
      logo: Images.Inox,
      name: "INOX",
      date: "11 Feb, 2023",
      amount: "₹2000",
      status: "Received",
    },
    {
      id: 2,
      logo: Images.Inox,
      name: "Gollers locho khaman",
      date: "10 Feb, 2023",
      amount: "₹2000",
      status: "Payment",
    },
    {
      id: 3,
      logo: Images.Inox,
      name: "Coffee Culture",
      date: "9 Feb, 2023",
      amount: "₹2000",
      status: "Payment",
    },
    {
      id: 4,
      logo: Images.Inox,
      name: "G3+ Fashion",
      date: "9 Feb, 2023",
      amount: "₹2000",
      status: "Received",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <RNImage source={item.image} style={styles.image} />
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["white", "transparent"]}
        style={styles.gradient}
      />
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.availButton}>
          <RNText style={styles.availText}>Avail Now </RNText>
        </TouchableOpacity>
        <RNText style={styles.subtitle}>{item.subtitle}</RNText>
        <RNText style={styles.price}>{item.price}</RNText>
      </View>
    </Pressable>
  );

  const renderTransaction = ({ item, index }) => (
    <View style={styles.transactionContainer}>
      <View style={{ flexDirection: "row", gap: wp(5) }}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <RNImage source={item.logo} style={styles.logo} />
          </View>
          {index < transactions.length - 1 && <View style={styles.line} />}
        </View>
        <View>
          <RNText style={styles.transactionName}>{item.name} </RNText>
          <RNText style={styles.transactionDate}>{item.date} </RNText>
        </View>
      </View>
      <View style={styles.transactionAmountContainer}>
        <RNText style={styles.transactionAmount}>{item.amount} </RNText>
        <RNText
          style={[
            styles.transactionStatus,
            item.status === "Received" ? styles.received : styles.payment,
          ]}
        >
          {item.status}
        </RNText>
      </View>
    </View>
  );

  return (
    <RNContainer style={{ paddingVertical: hp(3), gap: hp(3) }}>
      <View style={{ width: wp(100), ...RNStyles.center }}>
        <LinearGradient
          start={{ x: 1.2, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
          style={[styles.creditContainer]}
        >
          <View style={styles.innerContainer}>
            <View style={{ ...RNStyles.flexRow, marginLeft: wp(-5) }}>
              <RNImage
                source={Images.Coin}
                style={{ width: wp(28), height: wp(28) }}
              />
              <View style={{ marginLeft: wp(-3) }}>
                <RNText style={styles.title}>Woah! </RNText>
                <RNText style={styles.subTitle}>You have saved ₹1580 </RNText>
                <TouchableOpacity
                  style={[RNStyles.flexRow, { marginTop: hp(1) }]}
                >
                  <RNText
                    style={[{ ...styles.subTitle, fontSize: FontSize.font10 }]}
                  >
                    View on App{" "}
                  </RNText>
                  <RNImage
                    source={Images.Open}
                    style={{ width: wp(2), height: wp(2) }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ImageBackground
              resizeMode="contain"
              source={Images.creditbg}
              style={{ ...RNStyles.center, padding: wp(4), marginTop: hp(0.5) }}
            >
              <RNText
                style={{
                  fontSize: FontSize.font10,
                  fontFamily: FontFamily.SemiBold,
                }}
              >
                EXTEND
              </RNText>
              <RNText
                style={{
                  fontSize: FontSize.font10,
                  fontFamily: FontFamily.SemiBold,
                }}
              >
                MEMBERSHIP
              </RNText>
              <RNText
                style={{
                  fontSize: FontSize.font10,
                  fontFamily: FontFamily.SemiBold,
                }}
              >
                FOR <RNText style={styles.discountText}>₹1299</RNText> ₹999
              </RNText>
            </ImageBackground>
          </View>
        </LinearGradient>
      </View>

      <View style={{ width: wp(100), gap: hp(1), alignItems: "center" }}>
        <RNText
          style={[
            styles.title,
            { alignSelf: "flex-start", paddingHorizontal: wp(3) },
          ]}
        >
          Money Matters{" "}
        </RNText>
        <ImageBackground
          resizeMode="contain"
          source={Images.Effect}
          style={styles.leftImage}
        />
        <ImageBackground
          resizeMode="contain"
          source={Images.Effect2}
          style={styles.rightImage}
        />
        <View
          style={{
            ...RNStyles.flexRowBetween,
            backgroundColor: "#ECECEC",
            borderRadius: 5,
            paddingHorizontal: wp(3),
            paddingVertical: wp(2),
            width: wp(94),
          }}
        >
          <View style={{ ...RNStyles.flexRow, gap: wp(2) }}>
            <RNImage
              source={Images.Rupee}
              style={{ width: wp(8), height: wp(8) }}
            />
            <RNText style={styles.subTitle}>WEONE Prime Credit </RNText>
          </View>
          <View style={{ ...RNStyles.flexRow, gap: wp(2) }}>
            <RNText style={styles.subTitle}>
              ₹{data?.moneyMatter?.Balance || 0}
            </RNText>
            <RNImage
              source={Images.RightIcon}
              style={{ width: wp(2.5), height: wp(2.5) }}
            />
          </View>
        </View>
      </View>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  creditContainer: {
    ...RNStyles.center,
    width: wp(94),
    height: hp(11),
    borderRadius: 6,
  },
  innerContainer: {
    ...RNStyles.flexRowBetween,
    width: wp(93.8),
    height: hp(10.9),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
    padding: wp(2),
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Medium,
  },
  leftImage: {
    width: wp(20),
    height: hp(10),
    position: "absolute",
    top: hp(3),
    left: -10,
  },
  rightImage: {
    width: wp(20),
    height: hp(10),
    position: "absolute",
    top: hp(3),
    right: -10,
  },
  discountText: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.SemiBold,
    textDecorationLine: "line-through",
  },
});

export default CreditContainer;
