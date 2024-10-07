import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RNContainer, RNText } from "../../common";
import { Colors, FontFamily, FontSize, wp } from "../../theme";
import { ProductItem } from "../../components";

const ProductDetails = () => {
  return (
    <RNContainer>
      <View
        style={{
          width: "95%",
          height: "40%",
          backgroundColor: Colors.EFEFEF,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ paddingHorizontal: wp(2), backgroundColor: "#1CA8A2" }}>
          <RNText color={Colors.White}>BESTSELLER</RNText>
        </View>
        <View
          style={{ paddingHorizontal: wp(2), backgroundColor: Colors.White }}
        >
          <RNText
            size={FontSize.font12}
            family={FontFamily.Medium}
            color={"#4688F2"}
          >
            15 colors
          </RNText>
        </View>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/6659/b56d/b117a5ea5afd76e53f5a1f34b70795f6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T3ud1Ie3h62lzaxKF-Bfg2YUTNXcbaboB45chVcJ8f2P04e3Q6YU06GVFl1KjHKcfocCg-aeZpm3BjThV1HWgMQW36uRVVdt4jdtmLY9SrN30uxyMzprHLw1g8iJSDgzkj0JPDRJAcmf88-dONvTrcaLLbhzt8Yd638XVvvs7798WlhX2yGhIyX1I~SS1Ru4pBufQEXcPiWoTBvzVkcrI4oNwbR5n2JRnzK8KP5h-g89mm9323eDipE2BSU6iRQ6229kTptmM8r7rU-g6fkL1omaiNHQmcVp1yctAqxcG0RcQe6aNWqh-h~UcRVIYoDT4D2SjLzQriKftuBfUOYH2Q__",
          }}
        />
      </View>
      <RNText size={FontSize.font10}>
        1000+ people orderded this in the last 30 days
      </RNText>
      <View>
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
      <RNText size={FontSize.font15} family={FontFamily.Medium}>
        ₹35000
        <RNText
          color={Colors.Grey}
          size={FontSize.font13}
          family={FontFamily.Medium}
        >
          ₹35000
        </RNText>
      </RNText>
      <View>
        <RNText>About</RNText>
        <RNText color={Colors.Grey} size={FontSize.font10}>
          The upgraded S6 SiP runs up to 20 percent faster, allowing apps to
          also launch 20 percent faster, while maintaining the same all-day
          18-hour battery life.
        </RNText>
      </View>
      <View>
        <RNText size={FontSize.font15} family={FontFamily.Medium}>
          Similar Products
        </RNText>
        <ProductItem />
      </View>
      <View>
        <RNText>Details</RNText>
        <RNText color={Colors.Grey}>
          Make a bold fashion statement with this watch from Fossil. With a
          stainless steel case and strap, this sophisticated timepiece is as
          tough as is stylish. Thanks to the three-fold clasp and push but...
          more
        </RNText>
      </View>
    </RNContainer>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
