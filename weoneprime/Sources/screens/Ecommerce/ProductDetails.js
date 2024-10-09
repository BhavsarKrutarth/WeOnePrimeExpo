import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RNContainer, RNText } from "../../common";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import { ProductItem, TryProduct } from "../../components";
import { Images } from "../../constants";

const ProductDetails = () => {
  return (
    <RNContainer>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: wp(95),
            height: hp(45),
            backgroundColor: Colors.EFEFEF,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: wp(3),
              paddingVertical: hp(0.5),
              backgroundColor: "#1CA8A2",
              borderRadius: wp(4),
              position: "absolute",
              top: hp(1.5),
              left: wp(2),
            }}
          >
            <RNText color={Colors.White}>BESTSELLER</RNText>
          </View>
          <View
            style={{
              paddingHorizontal: wp(2),
              backgroundColor: Colors.White,
              paddingHorizontal: wp(2),
              borderRadius: wp(4),
              position: "absolute",
              bottom: hp(1.5),
              right: wp(2),
            }}
          >
            <RNText
              size={FontSize.font12}
              family={FontFamily.Medium}
              color={"#4688F2"}
            >
              15 colors
            </RNText>
          </View>
          <View
            style={{
              width: normalize(7),
              height: normalize(7),
              backgroundColor: Colors.D9D9D9,
              backgroundColor: "#5C5C5C",
              borderRadius: wp(4),
            }}
          />
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/6659/b56d/b117a5ea5afd76e53f5a1f34b70795f6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T3ud1Ie3h62lzaxKF-Bfg2YUTNXcbaboB45chVcJ8f2P04e3Q6YU06GVFl1KjHKcfocCg-aeZpm3BjThV1HWgMQW36uRVVdt4jdtmLY9SrN30uxyMzprHLw1g8iJSDgzkj0JPDRJAcmf88-dONvTrcaLLbhzt8Yd638XVvvs7798WlhX2yGhIyX1I~SS1Ru4pBufQEXcPiWoTBvzVkcrI4oNwbR5n2JRnzK8KP5h-g89mm9323eDipE2BSU6iRQ6229kTptmM8r7rU-g6fkL1omaiNHQmcVp1yctAqxcG0RcQe6aNWqh-h~UcRVIYoDT4D2SjLzQriKftuBfUOYH2Q__",
            }}
          />
        </View>
        <RNText size={FontSize.font10} color={Colors.Grey} pHorizontal={wp(2)}>
          1000+ people orderded this in the last 30 days
        </RNText>
        <View
          style={{
            paddingHorizontal: wp(2),
            paddingVertical: hp(1),
            backgroundColor: Colors.White,

            marginBottom: hp(1),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <RNText size={FontSize.font15} family={FontFamily.Medium}>
            Apple watch series 6
          </RNText>
          <RNText
            color={Colors.Grey}
            size={FontSize.font10}
            family={FontFamily.Medium}
          >
            Available in stock
          </RNText>
        </View>
        <RNText
          size={FontSize.font15}
          pHorizontal={wp(2)}
          family={FontFamily.Medium}
        >
          ₹35000{"  "}
          <RNText
            color={Colors.Grey}
            size={FontSize.font11}
            family={FontFamily.Medium}
            style={{ textDecorationLine: "line-through" }}
          >
            ₹35000
          </RNText>
        </RNText>
        <View
          style={{
            paddingHorizontal: wp(2),
            paddingVertical: hp(1),
            backgroundColor: Colors.White,
            marginBottom: hp(1),
          }}
        >
          <RNText pVertical={hp(1.5)}>About</RNText>
          <RNText
            style={{ lineHeight: 17 }}
            color={Colors.Grey}
            size={FontSize.font10}
          >
            The upgraded S6 SiP runs up to 20 percent faster, allowing apps to
            also launch 20 percent faster, while maintaining the same all-day
            18-hour battery life.
          </RNText>
        </View>
        <View
          style={{
            paddingHorizontal: wp(2),
            paddingVertical: hp(1),
            backgroundColor: Colors.White,
            marginBottom: hp(1),
          }}
        >
          <RNText
            size={FontSize.font15}
            family={FontFamily.Medium}
            pBottom={hp(1.53)}
          >
            Similar Products
          </RNText>
          <ProductItem />
        </View>
        <View
          style={{
            paddingHorizontal: wp(2),
            paddingVertical: hp(1),
            backgroundColor: Colors.White,
            marginBottom: hp(1),
          }}
        >
          <RNText>Details</RNText>
          <RNText color={Colors.Grey} size={FontSize.font10}>
            Make a bold fashion statement with this watch from Fossil. With a
            stainless steel case and strap, this sophisticated timepiece is as
            tough as is stylish. Thanks to the three-fold clasp and push but...
            more
          </RNText>
        </View>
        <View style={{ paddingHorizontal: wp(2) }}>
          <RNText>Product Details </RNText>
          <View style={{ flexDirection: "row" }}>
            <RNText size={FontSize.font10} color={Colors.Grey}>
              Water Resistant
            </RNText>
            <RNText size={FontSize.font10}>Yes</RNText>
          </View>
        </View>
        <View style={{ paddingHorizontal: wp(2) }}>
          <RNText>Photos </RNText>
          <View style={{ flexDirection: "row", paddingHorizontal: wp(2) }}>
            <Image
              source={Images.banner}
              style={{ width: wp(30), height: hp(10), borderRadius: 5 }}
            />
          </View>
        </View>
        <TryProduct />
      </ScrollView>
    </RNContainer>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
