import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import {
  RNButton,
  RNContainer,
  RNImage,
  RNInput,
  RNText,
} from "../../../common";
import { Colors, FontFamily, FontSize, hp, wp } from "../../../theme";
import FetchMethod from "../../../api/FetchMethod";
import Validation from "../../../utils/Validation";
import { Images } from "../../../constants";
import { Text } from "react-native";
import ImagePickerModal from "./ImagePickerModal";
import { Functions } from "../../../utils";
import { onAuthChange, setAsyncStorageValue } from "../../../redux/Reducers/AuthReducers";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ navigation }) => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    userPhoneNo: "",
    userPassword: "",
    userEmailId: "",
    userImage: "",
    userType: "Manual",
  });
  const [isError, setIsError] = useState({
    username: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  
  const handleRegistration = async () => {
    const errors = {
      username: !registerData.userName ? "Please enter your name" : "",
      email: !registerData.userEmailId
        ? "Please enter your email"
        : !Validation.isEmailValid(registerData.userEmailId)
          ? "Email is not valid"
          : "",
      phone: !registerData.userPhoneNo
        ? "Please enter your mobile number"
        : registerData.userPhoneNo.length < 10
          ? "Mobile number must be at least 10 digits"
          : "",
      password: !registerData.userPassword
        ? "Please enter your password"
        : !Validation.isPasswordValid(registerData.userPassword)
          ? "Password must be at least 8 characters"
          : "",
      confirmPassword: !confirmPassword
        ? "Please confirm your password"
        : !Validation.isSamePasswords(registerData.userPassword, confirmPassword)
          ? "Passwords do not match"
          : "",
    };
    setIsError(errors);
    
    if (Object.values(errors).some(error => error)) {
      return; 
    }
  
    try {
      console.log(registerData);
      
      const response = await FetchMethod.POST({
        EndPoint: "Registration",
        Params: registerData,
      });
      console.log(response);
      
      if (response.ResponseMessage === "User is exists") {
        Alert.alert("Registration Error", "User already exists. Please try logging in.");
      } else {
        dispatch(onAuthChange(true));
        await AsyncStorage.setItem("user", JSON.stringify(response));
        dispatch(setAsyncStorageValue(response));
      }
    } catch (error) {
      console.log("Registration error:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    }
  };
  

  const handleProfilePick = () => {
    setModalVisible(true);
  };

  const imageSource = registerData.userImage
    ? { uri: `data:image/jpeg;base64,${registerData.userImage}` }
    : Images.profile;

  const handleChange = (field) => (text) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  return (
    <RNContainer style={{ justifyContent: 'flex-end' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            // justifyContent: 'flex-end',
            gap: wp(10),
            padding: wp(5),
          }}
        >
          <View style={{ gap: wp(1), alignItems: "center" }}>
            <TouchableOpacity style={{}} >
              <Image source={imageSource} style={styles.image} />
              <TouchableOpacity onPress={handleProfilePick} style={styles.edit}>
                <RNImage source={Images.Edit} style={{ width: wp(4), height: wp(4) }} />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <RNText style={styles.title}>Register</RNText>
              <RNText style={styles.subtitle}>WEONE Prime</RNText>
            </View>
          </View>
          <View style={{ gap: hp(2) }}>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>First Name{" "}<RNText style={[styles.inputText, styles.requireStyle]}>*</RNText></RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userName}
                onChangeText={handleChange("userName")}
              />
              {isError.username && (
                <RNText style={styles.errorText}>
                  {isError.username}
                </RNText>
              )}
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Mobile No{" "}<RNText style={[styles.inputText, styles.requireStyle]}>*</RNText></RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userPhoneNo}
                onChangeText={handleChange("userPhoneNo")}
                keyboardType="phone-pad"
              />
              {isError.phone && (
                <RNText style={styles.errorText}>
                  {isError.phone}
                </RNText>
              )}
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Email{" "}<RNText style={[styles.inputText, styles.requireStyle]}>*</RNText></RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userEmailId}
                onChangeText={handleChange("userEmailId")}
              />
              {isError.email && (
                <RNText style={styles.errorText}>{isError.email}</RNText>
              )}
            </View>
            <View style={{ gap: hp(0.5) }}>
              <Text style={styles.inputText}>Password<RNText style={[styles.inputText, styles.requireStyle]}>*</RNText></Text>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userPassword}
                onChangeText={handleChange("userPassword")}
                secureTextEntry={!showPassword}
                toggleVisibility={() => setShowPassword(!showPassword)}
                iconSource={showPassword ? Images.eyeOn : Images.eyeOff}
              />
              {isError.password && (
                <RNText style={styles.errorText}>
                  {isError.password}
                </RNText>
              )}
            </View>
            <View style={{ gap: hp(0.5) }}>
              <Text style={styles.inputText}>Confirm Password</Text>
              <RNInput
                style={styles.inputContainer}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
                iconSource={showConfirmPassword ? Images.eyeOn : Images.eyeOff}
              />

              {isError.confirmPassword && (
                <RNText style={styles.errorText}>{isError.confirmPassword}</RNText>
              )}
            </View>
          </View>
          <RNButton
            title="Register "
            style={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={handleRegistration}
            gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
          />
        </View>
      </ScrollView>

      <ImagePickerModal modalVisible={modalVisible} setModalVisible={setModalVisible} setRegisterData={setRegisterData} />

    </RNContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(50),
    marginBottom: hp(0.5),
  },
  edit: {
    backgroundColor: Colors.Purple,
    width: wp(8),
    height: wp(8),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(9),
    right: 0
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
  },
  subtitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Regular,
    color: Colors.Grey,
  },
  inputText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,

  },
  inputContainer: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
  },
  buttonText: {
    fontSize: FontSize.font17,
    fontFamily: FontFamily.SemiBold,
  },
  errorText: {
    color: "red",
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Regular,
  },
  requireStyle: {
    color: Colors.Red,
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Light
  }
});

export default RegisterScreen;
