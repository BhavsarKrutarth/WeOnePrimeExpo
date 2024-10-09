import React from "react";
import { View, Modal, TouchableWithoutFeedback, TouchableOpacity, Alert } from "react-native";
import { RNImage, RNText, RNStyles } from "../../../common";
import { wp, Colors, FontSize, FontFamily } from "../../../theme";
import * as ImagePicker from "expo-image-picker";
import { Images } from "../../../constants";

const ImagePickerModal = ({ modalVisible, setModalVisible, setRegisterData }) => {
  const handleCameraPick = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Permission to access the camera is required!");
      return;
    }
  
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const base64Data = result.assets[0].base64;
      setRegisterData((prevState) => ({
        ...prevState,
        userImage: base64Data,
      }));
    }
  }; 

  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const base64Data = result.assets[0].base64;
      setRegisterData((prevState) => ({
        ...prevState,
        userImage: base64Data,
      }));
    }
  };

  return (
    <Modal transparent={true} visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ gap: wp(5) }}>
              <View style={{ ...RNStyles.flexRowBetween }}>
                <TouchableOpacity onPress={() => setModalVisible(false)} hitSlop={20}>
                  <RNImage style={{ width: wp(4), height: wp(4) }} source={Images.close} />
                </TouchableOpacity>
                <RNText style={styles.title}>Profile Photo</RNText>
                <View></View>
              </View>
              <View style={{ borderWidth: 0.5, borderColor: Colors.Grey }} />
            </View>
            <View style={{ ...RNStyles.flexRowAround }}>
              <TouchableOpacity style={[RNStyles.center, { gap: 5 }]} onPress={() => { handleCameraPick(); setModalVisible(false); }}>
                <RNImage style={{ width: wp(9), height: wp(9) }} source={Images.camera} />
                <RNText style={[styles.inputText, { fontSize: FontSize.font13, fontFamily: FontFamily.Regular }]}>Camera</RNText>
              </TouchableOpacity>
              <TouchableOpacity style={[RNStyles.center, { gap: 5 }]} onPress={() => { handleImagePick(); setModalVisible(false); }}>
                <RNImage style={{ width: wp(9), height: wp(9) }} source={Images.gallary} />
                <RNText style={[styles.inputText, { fontSize: FontSize.font13, fontFamily: FontFamily.Regular }]}>Gallery</RNText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.White,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    gap: wp(4),
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
  },
  inputText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
};

export default ImagePickerModal;
