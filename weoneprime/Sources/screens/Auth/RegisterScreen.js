import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { RNButton, RNContainer, RNInput, RNStyles, RNText } from "../../common";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import * as ImagePicker from "expo-image-picker";
import FetchMethod from "../../api/FetchMethod";

const RegisterScreen = ({ navigation }) => {
  const [secure, setSecure] = useState(true);
  const [registerData, setRegisterData] = useState({
    userName: "",
    userPhoneNo: "",
    userPassword: "",
    userEmailId: "",
    userImage: "",
    userType: "MobileApp",
  });  

//   const handleRegistration = async () => {
//     try {
//         const response = await fetch(
//             "https://weoneprimecoreapi.actoscript.com/api/Registration",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     userName: registerData.userName,
//                     userPhoneNo: registerData.userPhoneNo,
//                     userPassword: registerData.userPassword,
//                     userEmailId: registerData.userEmailId,
//                     userImage: registerData.userImage,
//                     userType: registerData.userType,
//                 }),
//             }
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Success:", data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };

  const handleRegistration = async () => {
    try {
      const response = await FetchMethod.POST({
        EndPoint: "/Registration",
        Params: registerData,
      })
      console.log(response);
    } catch (error) {
      console.log(error);
      
    }
  };


  const handleImagePick = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access media library is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });

    if (result.canceled) {
      console.log("User cancelled image picker");
    } else {
      const base64Data =
        result.assets && result.assets.length > 0
          ? result.assets[0].base64
          : null;
      if (base64Data) {
        console.log("Base64 Image Data:", base64Data);
        setRegisterData((prevState) => ({
          ...prevState,
          userImage: base64Data,
        }));
      } else {
        Alert.alert("Error", "No base64 data found in result.");
      }
    }
  };

  const imageSource = registerData.userImage
    ? { uri: `data:image/jpeg;base64,${registerData.userImage}` }
    : require("../../assets/images/profile.png");

  const handleChange = (field) => (text) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  return (
    <RNContainer>
      <ScrollView>
        <View
          style={{
            flex: 1,
            gap: wp(10),
            justifyContent: "flex-end",
            height: hp(100),
            padding: wp(5),
          }}
        >
          <View style={{ gap: wp(1), alignItems: 'center' }}>
            <TouchableOpacity onPress={handleImagePick}>
              <Image source={imageSource} style={styles.image} />
            </TouchableOpacity>
            <RNText style={styles.title}>Register</RNText>
            <RNText style={styles.subtitle}>WEONE Prime</RNText>
          </View>
          <View style={{ gap: hp(2) }}>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>First Name</RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userName}
                onChangeText={handleChange("userName")}
              />
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Mobile No</RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userPhoneNo}
                onChangeText={handleChange("userPhoneNo")}
              />
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Email</RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userEmailId}
                onChangeText={handleChange("userEmailId")}
              />
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Password</RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userPassword}
                onChangeText={handleChange("userPassword")}
                secureTextEntry={secure}
                isPress={() => setSecure(!secure)}
              />
            </View>
          </View>
          <RNButton
            title="Register"
            style={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={handleRegistration}
            gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
          />
        </View>
      </ScrollView>
    </RNContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(50),
    marginBottom: hp(0.5),
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Bold,
  },
  subtitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    color: Colors.Grey,
  },
  inputText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
  inputContainer: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
  },
  buttonContainer: {
    backgroundColor: Colors.Black,
    borderRadius: 6,
    marginBottom: Platform.OS === 'ios' ? hp(15) : hp(5),
  },
  buttonText: {
    fontSize: FontSize.font17,
    fontFamily: FontFamily.SemiBold,
  },
});
