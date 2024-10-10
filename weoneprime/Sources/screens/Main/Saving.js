import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../theme'
import { SafeAreaView } from 'react-native'
import { RNButton, RNCommonHeader, RNImage, RNStyles, RNText } from '../../common'
import { Images } from '../../constants'

export default function Saving() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar hidden={true} />
        <ImageBackground resizeMode='stretch' source={require('../../assets/images/SavingEffect.png')} style={{ height: hp(15), width: wp(100), justifyContent: 'space-between' }}>
          <RNCommonHeader style={{ backgroundColor: Colors.Transparent, borderBottomWidth: 0 }} title={"My Savings"} />
          <View style={[RNStyles.flexRowBetween, { padding: wp(4) }]}>
            <View>
              <RNText size={16} family={FontFamily.Medium}>Trial Plan</RNText>
              <RNText size={10} family={FontFamily.Medium}>23 Aug 2024 to 22 Aug 2025</RNText>
            </View>
            <View>
              <RNText size={10} family={FontFamily.Medium}>Total saving</RNText>
              <RNText size={14} family={FontFamily.Medium} align={'right'}>₹5225</RNText>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.membershipOffer, {gap: hp(1)}]}>
          <View style={[RNStyles.flexRowBetween, {marginBottom: hp(1)}]}>
            <RNImage source={Images.Weoneprime} style={{ width: wp(22), height: hp(3) }} />
            <RNText
              size={FontSize.font12}
              family={FontFamily.Medium}
            >₹10000</RNText>
          </View>
          <RNText color={Colors.DarkGrey}
            size={FontSize.font11}
            family={FontFamily.Regular}
          >Flat ₹5000 off on 1% club Membership</RNText>
          <View style={{borderWidth: .5,borderColor: Colors.D9D9D9}} />
          <RNText color={Colors.Green} family={FontFamily.Light} size={FontSize.font12}>Last updated on 30 aug 2024</RNText>
        </View>
      </View>
      <View style={styles.bottomView}>
        <RNText color={Colors.DarkGrey}
          size={FontSize.font11}
          family={FontFamily.Medium}
          align={"center"}
        >
          Join weone prime to avail this offer
        </RNText>
        <RNButton
          title={
            <RNText style={styles.buttonText}>
              EXTEND MEMBERSHIP FOR{" "}
              <RNText
                style={[
                  styles.buttonText,
                  { textDecorationLine: "line-through" },
                ]}
              >
                ₹1299{" "}
              </RNText>
              ₹999
            </RNText>
          }
          textStyle={styles.buttonText}
          gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  membershipOffer: {
    backgroundColor: Colors.ECECEC,
    margin: wp(3),
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: normalize(4)
  },
  bottomView: {
    padding: wp(3),
    backgroundColor: Colors.ECECEC,
    width: wp(100),
    borderTopStartRadius: normalize(10),
    borderTopEndRadius: normalize(10),
  },
  buttonText: {
    color: Colors.White,
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium
  }
})