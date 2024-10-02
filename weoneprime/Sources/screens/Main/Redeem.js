import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RNButton, RNImage, RNStyles, RNText } from "../../common";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

export default function Redeem() {
  return (
    <SafeAreaView>
      <View>
        <LinearGradient
          colors={["#D8E5F1", "#E0DEF2", "#EADEF2", "#F1E2E7"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{
            height: hp(70),
            width: wp(100),
            justifyContent: 'center',
            alignItems: "center",
            gap: hp(3),
            padding: wp(10),
            borderBottomRightRadius: normalize(22),
            borderBottomLeftRadius: normalize(22),
          }}
        >
          <View style={RNStyles.center}>
            <RNText style={styles.sectionText}>Redeem in Showroom?</RNText>
            <RNText size={FontSize.font10} color={Colors.DarkGrey}>
              scan code at a restaurant within 15 minutes.
            </RNText>
          </View>
          <View
            style={{
              ...RNStyles.center,
              backgroundColor: Colors.White,
              width: wp(75),
              paddingVertical: hp(3),
              borderRadius: normalize(15),
              gap: hp(2),
            }}
          >
            <RNImage
              style={{ width: wp(30), height: wp(30) }}
              source={require("../../assets/images/qr-code.png")}
            />
            <View>
              <View style={[RNStyles.flexRowCenter, {gap: 2}]}>
                <MaterialCommunityIcons
                  name={"clock-time-three-outline"}
                  style={{ fontSize: FontSize.font14 }}
                />
                <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
                  15.18
                </RNText>
              </View>
              <RNText size={FontSize.font10}>
                Reward ready to scan in our shop
              </RNText>
            </View>
            <View
              style={{
                ...RNStyles.flexRowCenter,
                backgroundColor: Colors.LightGrey,
                width: wp(68),
                borderRadius: normalize(7),
                paddingVertical: wp(2),
                paddingHorizontal: wp(5),
                gap: wp(2),
              }}
            >
              <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
                Month end offers: Buy classic woman saree at Rs. 1099 only
              </RNText>
              <Octicons name={"chevron-right"} size={15} />
            </View>
            <View
              style={{
                borderColor: Colors.LightGrey,
                borderWidth: 1,
                width: wp(75),
              }}
            />
            <View>
              <RNButton
                title={
                  <View style={[RNStyles.flexRow, { gap: wp(2) }]}>
                    <RNText
                      size={FontSize.font13}
                      family={FontFamily.SemiBold}
                      color={Colors.White}
                    >
                      Code: 3354841CA{" "}
                    </RNText>
                    <View
                      style={{
                        borderColor: "rgba(255, 255, 255, .3 )",
                        borderWidth: 0.8,
                        height: hp(2.5),
                        borderStyle: "dashed",
                      }}
                    ></View>
                    <MaterialIcons
                      name="content-copy"
                      size={15}
                      color={Colors.White}
                    />
                  </View>
                }
                style={{ paddingVertical: hp(0.5), paddingHorizontal: wp(3) }}
                textStyle={styles.buttonText}
                gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
              />
            </View>
          </View>
        </LinearGradient>
        <RNText
          size={FontSize.font11}
          family={FontFamily.Medium}
          pHorizontal={wp(3)}
          pVertical={hp(1)}
        >
          Scan the QR code at the front desk or kisko. jhhdsj juyufjhf hjsdsds
          njjcgsc tell us the mumrik code at the drive thru speakers. Scan the
          QR code at the front desk or kisko
        </RNText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    fontSize: FontSize.font14,
    color: Colors.Black,
    fontFamily: FontFamily.SemiBold,
  },
});
