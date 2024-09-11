import { Image, Pressable,  StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { RNButton, RNContainer, RNImage, RNInput, RNStyles, RNText } from "../../common";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants";

const LoginScreen = ({ navigation, setAuth }) => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : hp(-15)}
    >
      <RNContainer style={styles.Container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={Images.Logo} />
        </View>
        <View style={{ gap: hp(5), flex: 1.8 }}>
          <View>
            <RNText style={styles.title}>Hey, hello{" "}👋</RNText>
            <RNText style={styles.subTitle}>Enter the information you entered while registering.</RNText>
          </View>
          <View style={{ gap: hp(2) }}>
            <View>
              <RNText style={styles.inputText}>E-mail{' '}<RNText style={[styles.inputText, styles.requireStyle]}>*</RNText></RNText>
              <RNInput
                style={styles.inputContainer}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View>
              <RNText style={styles.inputText}>Password{' '}<RNText style={[styles.inputText, styles.requireStyle]}>*</RNText></RNText>
              <RNInput
                style={styles.inputContainer}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secure}
                isPress={() => setSecure(!secure)} />
              <Pressable>
                <MaskedView
                  style={{ flexDirection: 'row', height: 20 }}
                  maskElement={
                    <RNText style={[styles.forgetPasswordText, { color: 'black', textAlign: 'right' }]}>
                      Forgot Password?
                    </RNText>
                  }
                >
                  <LinearGradient
                    colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
                    start={{ x: 1.2, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
              </Pressable>
            </View>
          </View>

          <RNButton
            title="Continue "
            textStyle={styles.buttonText}
            gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
            onPress={handleLogin}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', gap: wp(3) }}>
          <View style={styles.continue}>
            <View style={styles.line} />
            <RNText style={[styles.subTitle, {color: '#B3B3B3'}]}>or Continue with</RNText>
            <View style={styles.line} />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <RNImage source={Images.Google} style={{ width: wp(5), height: wp(5) }} />
            <RNText style={styles.LoginText}>Log in With Google{" "}</RNText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <RNImage source={Images.Apple} style={{ width: wp(5), height: wp(5) }} />
            <RNText style={styles.LoginText}>Continue with Apple{" "}</RNText>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={() => { setAuth(true); navigation.navigate('Tab')}} >
            <RNText style={styles.inputText}>Skip For now{" "}</RNText>
          </TouchableOpacity>
        </View>
      </RNContainer>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    padding: wp(5),
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Regular,
    color: Colors.Grey
  },
  inputText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
  buttonText: {
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Medium,
  },
  loginButton: {
    ...RNStyles.flexRowCenter,
    gap: wp(2),
    backgroundColor: '#F3F3F3',
    padding: wp(3),
    borderRadius: wp(2)
  },
  LoginText: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
    color: Colors.Black
  },
  forgetPasswordText: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.SemiBold,
    backgroundColor: 'transparent',
  },
  continue: {
    ...RNStyles.flexRowCenter,
    gap: wp(2),
    // marginVertical: 20,
  },
  line: {
    flex: 1,
    padding: 0,
    borderWidth: .8,
    borderColor: '#F3F3F3',
    marginTop: 2
  },
  requireStyle: {
    color: Colors.Red, 
    fontSize: FontSize.font18, 
    fontFamily: FontFamily.Light
  }
});
