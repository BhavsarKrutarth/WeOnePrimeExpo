import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Platform,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import {
  RNButton,
  RNContainer,
  RNImage,
  RNInput,
  RNStyles,
  RNText,
} from "../../common";
import { Colors, FontFamily, FontSize, hp, width, wp } from "../../theme";
import * as ImagePicker from "expo-image-picker";
import FetchMethod from "../../api/FetchMethod";
import Validation from "../../utils/Validation";
import { Images } from "../../constants";

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
  const [isError, setIsError] = useState({
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegistration = async () => {
    const errors = {
      email: !Validation.isEmailValid(registerData.userEmailId),
      phone: registerData.userPhoneNo.length < 10,
      password: !Validation.isPasswordValid(registerData.userPassword),
      confirmPassword: !Validation.isSamePasswords(
        registerData.userPassword,
        confirmPassword
      ),
    };
    setIsError(errors);

    try {
      const response = await FetchMethod.POST({
        EndPoint: "/Registration",
        Params: registerData,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfile = () => {
    setModalVisible(true);
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
    : Images.profile;

  const handleChange = (field) => (text) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  return (
    <RNContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            gap: wp(10),
            padding: wp(5),
          }}
        >
          <View style={{ gap: wp(1), alignItems: "center" }}>
            <TouchableOpacity onPress={handleProfile}>
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
                keyboardType="phone-pad"
              />
              {isError.phone && (
                <RNText style={styles.errorText}>
                  Mobile number not valid
                </RNText>
              )}
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Email</RNText>
              <RNInput
                style={styles.inputContainer}
                value={registerData.userEmailId}
                onChangeText={handleChange("userEmailId")}
              />
              {isError.email && (
                <RNText style={styles.errorText}>Email not valid</RNText>
              )}
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
              {isError.password && (
                <RNText style={styles.errorText}>
                  Password must be at least 8 characters
                </RNText>
              )}
            </View>
            <View style={{ gap: hp(0.5) }}>
              <RNText style={styles.inputText}>Confirm Password</RNText>
              <RNInput
                style={styles.inputContainer}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={secure}
              />
              {isError.confirmPassword && (
                <RNText style={styles.errorText}>Passwords do not match</RNText>
              )}
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

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={RNStyles.flexRowBetween}>
              <RNText style={styles.modalTitle}>complete using action</RNText>
              <RNImage source={Images.close} style={{ width: 50 }} />
            </View>
          </View>
        </View>
      </Modal>
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
  },
  buttonText: {
    fontSize: FontSize.font17,
    fontFamily: FontFamily.SemiBold,
  },
  errorText: {
    color: "red",
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: wp(100),
    padding: wp(5),
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Bold,
    marginBottom: hp(2),
  },
});

export default RegisterScreen;
