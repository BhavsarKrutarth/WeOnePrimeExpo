import {
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  RNButton,
  RNContainer,
  RNImage,
  RNInput,
  RNStyles,
  RNText,
} from "../../common";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AppleAuthentication from "expo-apple-authentication";
import { jwtDecode } from "jwt-decode";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation, setAuth }) => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId: "https://auth.expo.io/@nency_2403/weoneprime",
    iosClientId:
      "274641210203-cetf1d58ut3vtkef0cfhteo4epkb94jt.apps.googleusercontent.com",
    androidClientId:
      "274641210203-ksr8n2q2bknj230gnv5b1t32bh83m374.apps.googleusercontent.com",
    // webClientId:
    //   "274641210203-9dq6liqkkhhvgi1ihtabcdqqf43nrv03.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Logged in with Google!", user);
          setAuth(true);
          navigation.navigate("Tab");
        })
        .catch((error) => {
          console.error("Google Sign-In error", error);
        });
    }
  }, [response]);

  const handleLogin = () => { };

  const loginWithApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const decoded = jwtDecode(credential.identityToken);
      console.log(
        "decoded   " + JSON.stringify(decoded, null, 2),
        "credentials: " + JSON.stringify(credential, null, 2)
      );
      // signed in
    } catch (e) {
      console.log(e);
      if (e.code === "ERR_REQUEST_CANCELED") {
        console.log(e);

        // handle that the user canceled the sign-in flow
      } else {
        console.log(e);
        // handle other errors
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : hp(-15)}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <RNContainer style={styles.Container}>
          <View style={{  gap: hp(5) }}>
            <View>
              <Image source={Images.Logo} />
            </View>
            <View>
              <RNText style={styles.title}>Hey, hello 👋</RNText>
              <RNText style={styles.subTitle}>
                Enter the information you entered while registering.
              </RNText>
            </View>
            <View style={{ gap: hp(2) }}>
              <View>
                <RNText style={styles.inputText}>
                  E-mail{" "}
                  <RNText style={[styles.inputText, styles.requireStyle]}>
                    *
                  </RNText>
                </RNText>
                <RNInput
                  style={styles.inputText}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View>
                <RNText style={styles.inputText}>
                  Password{" "}
                  <RNText style={[styles.inputText, styles.requireStyle]}>
                    *
                  </RNText>
                </RNText>
                <RNInput
                  style={styles.inputText}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={secure}
                  isPress={() => setSecure(!secure)}
                />
                <Pressable>
                  <MaskedView
                    style={{ flexDirection: "row", height: 20 }}
                    maskElement={
                      <RNText
                        style={[
                          styles.forgetPasswordText,
                          { color: "black", textAlign: "right" },
                        ]}
                      >
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
          <View style={{gap: hp(2) }}>
            <View style={styles.continue}>
              <View style={styles.line} />
              <RNText style={[styles.subTitle, { color: "#B3B3B3" }]}>
                or Continue with
              </RNText>
              <View style={styles.line} />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => promptAsync()}
            >
              <RNImage
                source={Images.Google}
                style={{ width: wp(5), height: wp(5) }}
              />
              <RNText style={styles.LoginText}>Log in With Google </RNText>
            </TouchableOpacity>
            {Platform.OS === 'ios' && <TouchableOpacity
              style={styles.loginButton}
              onPress={() => loginWithApple()}
            >
              <RNImage
                source={Images.Apple}
                style={{ width: wp(5), height: wp(5) }}
              />
              <RNText style={styles.LoginText}>Continue with Apple </RNText>
            </TouchableOpacity>}

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                setAuth(true);
                navigation.navigate("Tab");
              }}
            >
              <RNText style={styles.inputText}>Skip For now </RNText>
            </TouchableOpacity>
          </View>
        </RNContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    padding: wp(5),
    gap: hp(5)
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Regular,
    color: Colors.Grey,
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
    backgroundColor: "#F3F3F3",
    padding: wp(3),
    borderRadius: wp(2),
  },
  LoginText: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
  },
  forgetPasswordText: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.SemiBold,
    backgroundColor: "transparent",
  },
  continue: {
    ...RNStyles.flexRowCenter,
    gap: wp(2),
  },
  line: {
    flex: 1,
    padding: 0,
    borderWidth: 0.8,
    borderColor: "#F3F3F3",
    marginTop: 2,
  },
  requireStyle: {
    color: Colors.Red,
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Light,
  },
});
