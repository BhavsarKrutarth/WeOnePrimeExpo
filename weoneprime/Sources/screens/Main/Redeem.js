import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RNButton, RNImage, RNStyles, RNText } from "../../common";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { useSelector } from "react-redux";
import QRCode from 'react-native-qrcode-svg'; 

export default function Redeem() {
  const RedeemData = useSelector(state => state.Redeem.RedeemData);
  // const [timeLeft, setTimeLeft] = useState(.05 * 60); 

  // useEffect(() => {
  //   if (timeLeft === 0) return; 
  //   const timerId = setInterval(() => {
  //     setTimeLeft(prevTime => prevTime - 1);
  //   }, 1000);
    
  //   return () => clearInterval(timerId); 
  // }, [timeLeft]);

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  // };

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
            gap: hp(5),
            padding: wp(10),
            borderBottomRightRadius: normalize(22),
            borderBottomLeftRadius: normalize(22),
          }}
        >
          <View style={RNStyles.center}>
            <RNText style={styles.sectionText}>Redeem in Showroom?</RNText>
            <RNText size={FontSize.font10} color={Colors.DarkGrey}>
              Scan code at our shop.
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
            <QRCode
              value={RedeemData.Qrcode} 
              size={normalize(120)} 
              color={Colors.Black}
              backgroundColor="white"
            />
            {/* {timeLeft === 0 && 
            (
            <RNText size={FontSize.font12} color={Colors.Red} family={FontFamily.SemiBold} style={{position: 'absolute', top: hp(7.5)}}>Expired</RNText>
            )} */}
            <View>
              {/* <View style={[RNStyles.flexRowCenter, {gap: 2}]}>
                <MaterialCommunityIcons
                  name={"clock-time-three-outline"}
                  style={{ fontSize: FontSize.font14 }}
                />
                <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
                  {formatTime(timeLeft)} 
                </RNText>
              </View> */}
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
                {RedeemData.OfferDesc}
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
                      Code: {RedeemData.Code}{" "}
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
          Scan the QR code at the front desk or kiosk. Tell us the code at the drive-thru speakers.
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
