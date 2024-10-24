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
import { Colors, FontFamily, FontSize, hp, useCustomFonts, wp } from "../../theme";
// import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants";
import { auth } from "./firebase";
import * as WebBrowser from "expo-web-browser";
import * as AppleAuthentication from "expo-apple-authentication";
import { jwtDecode } from "jwt-decode";
import FetchMethod from "../../api/FetchMethod";
import { useDispatch } from "react-redux";
import {
  onAuthChange,
  setAsyncStorageValue,
} from "../../redux/Reducers/AuthReducers";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Functions } from "../../utils";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   expoClientId: "https://auth.expo.io/@nency_2403/weoneprime",
  //   iosClientId:
  //     "274641210203-cetf1d58ut3vtkef0cfhteo4epkb94jt.apps.googleusercontent.com",
  //   androidClientId:
  //     "274641210203-ksr8n2q2bknj230gnv5b1t32bh83m374.apps.googleusercontent.com",
  //   webClientId:
  //     "274641210203-9dq6liqkkhhvgi1ihtabcdqqf43nrv03.apps.googleusercontent.com",
  //   scopes: ["profile", "email"],
  // });

  GoogleSignin.configure({
    webClientId:
      "274641210203-9dq6liqkkhhvgi1ihtabcdqqf43nrv03.apps.googleusercontent.com",
  });

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data.idToken;
      const user = userInfo.data.user;

      const response = await FetchMethod.POST({
        EndPoint: "Registration/User_Emailid_and_password_check",
        Params: {
          UserEmailId: user.email,
          UserPassword: "",
          ProviderId: user.id,
          UserType: "Google",
          UserName: user.name,
        },
      });
      console.log('response',response);
      
      if (response?.UserLoginid !== 0) {
        dispatch(onAuthChange(true));
        await Functions.setUserData(response);
        dispatch(setAsyncStorageValue(response));
        setErrorMessage("");
      } else {
        setErrorMessage(
          "Email address or password you're entered doesn't match any account."
        );
      }

      if (idToken) {
        console.log("ID Token:", idToken);
      } else {
        console.error("ID Token is undefined");
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  const handleLogin = async () => {
    console.log({
      email,
      password
    });
    
    try {
      const response = await FetchMethod.POST({
        EndPoint: "Registration/User_Emailid_and_password_check",
        Params: {
          UserEmailId: email,
          UserPassword: password,
          ProviderId: "",
          UserTye: "Manual",
          UserName: "",
          UserImage: ""
        },
      });
      console.log('response',response);
      
      if (response?.UserLoginid !== 0) {
        dispatch(onAuthChange(true));
        await Functions.setUserData(response);
        dispatch(setAsyncStorageValue(response));
        setErrorMessage("");
      } else {
        setErrorMessage(
          "email address or password you're entered doesn't match any account."
        );
      }
    } catch (error) {
      console.log("error", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

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
        "credentials: " + JSON.stringify(credential, null, 2),
        {
          UserEmailId: decoded.email,
          UserPassword: "   ",
          ProviderId: credential.authorizationCode,
          UserTye: "Apple",
          UserName: credential.fullName.givenName || decoded.email,
        }
      );

      const response = await FetchMethod.POST({
        EndPoint: "Registration/User_Emailid_and_password_check",
        Params: {
          UserEmailId: decoded.email,
          UserPassword: "",
          ProviderId: credential.authorizationCode,
          UserTye: "Apple",
          UserName: credential.fullName.givenName || decoded.email,
        },
      });

      if (response?.UserLoginid !== 0) {
        dispatch(onAuthChange(true));
        await Functions.setUserData(response);
        dispatch(setAsyncStorageValue(response));
        setErrorMessage("");
      } else {
        setErrorMessage(
          "email address or password you're entered doesn't match any account."
        );
      }
    } catch (e) {
      console.log(e);
      if (e.code === "ERR_REQUEST_CANCELED") {
      } else {
        console.log(e);
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
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image source={Images.Logo} />
          </View>
          <View style={{ gap: hp(5), flex: 1.8 }}>
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
                  toggleVisibility={() => setSecure(!secure)} 
                />
                {/* <Pressable>
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
                </Pressable> */}
                {errorMessage ? (
                  <RNText
                    family={FontFamily.Medium}
                    size={12}
                    align={"center"}
                    color={Colors.Red}
                    pTop={hp(2)}
                  >
                    {errorMessage}
                  </RNText>
                ) : null}
              </View>
            </View>

            <RNButton
              title="Continue "
              textStyle={styles.buttonText}
              gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
              onPress={handleLogin}
            />
            <RNText
              align={"center"}
              style={[styles.subTitle, { color: Colors.Black }]}
              onPress={() => navigation.navigate("Register")}
            >
              Register here
            </RNText>
          </View>
          <View style={{ flex: 1, justifyContent: "center", gap: wp(3) }}>
            <View style={styles.continue}>
              <View style={styles.line} />
              <RNText style={[styles.subTitle, { color: "#B3B3B3" }]}>
                or Continue with
              </RNText>
              <View style={styles.line} />
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                signInWithGoogle();
              }}
            >
              <RNImage
                source={Images.Google}
                style={{ width: wp(5), height: wp(5) }}
              />
              <RNText style={styles.LoginText}>Log in With Google</RNText>
            </TouchableOpacity>
            {Platform.OS === "ios" && (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => loginWithApple()}
              >
                <RNImage
                  source={Images.Apple}
                  style={{ width: wp(5), height: wp(5) }}
                />
                <RNText style={styles.LoginText}>Continue with Apple </RNText>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                dispatch(onAuthChange(true));
              }}
            >
              <RNText style={styles.inputText}>Skip For now</RNText>
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
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font12,
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
