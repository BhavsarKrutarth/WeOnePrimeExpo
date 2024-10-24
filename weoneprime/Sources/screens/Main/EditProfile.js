import { StyleSheet, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { RNCommonHeader, RNContainer, RNImage, RNText, RNStyles, RNButton } from '../../common';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../theme';
import { useSelector } from 'react-redux';
import { Images } from '../../constants';
import { Image } from 'react-native';
import ImagePickerModal from '../Auth/RegisterComponent/ImagePickerModal';

export default function EditProfile() {
  const { AsyncValue } = useSelector(({ Auth }) => Auth);
  const [focusedField, setFocusedField] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: AsyncValue?.UserName || '',
    email: AsyncValue?.UserEmailId || '',
    mobileNumber: AsyncValue?.UserPhoneNo || '',
    UserImage: AsyncValue?.UserImage || ''
  });

  const handleChange = (field, value) => {
    setProfileData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProfilePick = () => {
    setModalVisible(true);
  };

  return (
    <RNContainer>
      <RNCommonHeader title={"Edit Profile"} style={{ borderBottomWidth: 0, paddingVertical: hp(2) }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ ...RNStyles.flexCenter, flex: 0.4 }}>
            <TouchableOpacity>
              <Image source={{ uri: AsyncValue.UserImage }} style={styles.image} />
              <TouchableOpacity style={styles.edit} onPress={handleProfilePick}>
                <RNImage source={Images.camera} style={{ width: wp(6), height: wp(6) }} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, padding: wp(5), gap: hp(5) }}>
            <View>
              <RNText style={styles.inputText}>Full Name</RNText>
              <TextInput
                style={[
                  styles.inputContainer,
                  { borderBottomColor: focusedField === 'fullName' ? '#A95EED' : Colors.Grey }
                ]}
                value={profileData.fullName}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField(null)}
                onChangeText={value => handleChange('fullName', value)}
              />
            </View>
            <View>
              <RNText style={styles.inputText}>Email</RNText>
              <TextInput
                style={[
                  styles.inputContainer,
                  { borderBottomColor: focusedField === 'email' ? '#A95EED' : Colors.Grey }
                ]}
                value={profileData.email}
                editable={false}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </View>
            <View>
              <RNText style={styles.inputText}>Mobile Number</RNText>
              <TextInput
                style={[
                  styles.inputContainer,
                  { borderBottomColor: focusedField === 'mobileNumber' ? '#A95EED' : Colors.Grey }
                ]}
                value={profileData.mobileNumber}
                onFocus={() => setFocusedField('mobileNumber')}
                onBlur={() => setFocusedField(null)}
                onChangeText={value => handleChange('mobileNumber', value)}
              />
            </View>
            <RNButton
              title="Update"
              style={styles.buttonContainer}
              textStyle={styles.buttonText}
              gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
            />
          </View>
        </ScrollView>
        <ImagePickerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </KeyboardAvoidingView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  edit: {
    backgroundColor: '#f3f2f5',
    width: wp(8),
    height: wp(8),
    borderRadius: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(9),
    right: 0,
  },
  image: {
    width: wp(30),
    height: wp(30),
    borderRadius: normalize(15),
  },
  inputContainer: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingVertical: hp(0.5),
  },
  inputText: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.SemiBold,
    color: Colors.DarkGrey,
  },
});
