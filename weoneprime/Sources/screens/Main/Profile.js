import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RNCommonHeader, RNContainer, RNImage, RNStyles, RNText } from '../../common';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../theme';
import { Images } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthChange, setAsyncStorageValue } from '../../redux/Reducers/AuthReducers';

export default function Profile({ navigation }) {
  const { AsyncValue } = useSelector(({ Auth }) => Auth);
  console.log(AsyncValue);
  
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSignout = () => {
    setModalVisible(true);
  };

  const confirmSignout = () => {
    AsyncStorage.clear();
    dispatch(onAuthChange(false));
    dispatch(setAsyncStorageValue(""));
    setModalVisible(false);
  };

  const cancelSignout = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ padding: wp(4) }} onPress={() => navigation.goBack()}>
          <Image source={Images.Back} style={{ width: wp(4), height: wp(4), resizeMode: 'contain' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: wp(4) }} onPress={handleSignout}>
          <Image
            source={require('../../assets/images/logout.png')}
            style={{ width: wp(5), height: wp(5), resizeMode: 'contain', tintColor: '#403e44' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ ...RNStyles.flexCenter, flex: 1, gap: hp(3) }}>
        <RNImage
          source={{ uri: AsyncValue.UserImage }}
          style={{ width: wp(30), height: wp(30), borderRadius: normalize(15) }}
        />
        <View style={{ gap: hp(0.5) }}>
          <RNText size={FontSize.font18} family={FontFamily.SemiBold}>
            John Doe
          </RNText>
          <RNText color={Colors.DarkGrey} size={FontSize.font11} family={FontFamily.Light}>
            @JohnDoe10
          </RNText>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("EditProfile")}>
          <RNText color={Colors.Black} size={FontSize.font12} family={FontFamily.Regular}>
            Edit Profile
          </RNText>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={RNStyles.flexRowBetween}>
          <View style={{ ...RNStyles.flexRow, gap: wp(5) }}>
            <View style={{ ...RNStyles.center, backgroundColor: '#f3f2f5', borderRadius: normalize(7), height: wp(11), width: wp(11) }}>
              <RNImage source={require('../../assets/images/saving.png')} style={{ height: wp(6), width: wp(6), tintColor: '#403e44' }} />
            </View>
            <RNText style={styles.title}>My Saving</RNText>
          </View>
          <RNImage style={{ height: wp(6), width: wp(6), tintColor: '#403e44' }} source={require('../../assets/images/chevron-right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={RNStyles.flexRowBetween}>
          <View style={{ ...RNStyles.flexRow, gap: wp(5) }}>
            <View style={{ ...RNStyles.center, backgroundColor: '#f3f2f5', borderRadius: normalize(7), height: wp(11), width: wp(11) }}>
              <RNImage source={Images.Setting} style={{ height: wp(6), width: wp(6), tintColor: '#403e44' }} />
            </View>
            <RNText style={styles.title}>Setting</RNText>
          </View>
          <RNImage style={{ height: wp(6), width: wp(6), tintColor: '#403e44' }} source={require('../../assets/images/chevron-right.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={RNStyles.flexRowBetween}>
          <View style={{ ...RNStyles.flexRow, gap: wp(5) }}>
            <View style={{ ...RNStyles.center, backgroundColor: '#f3f2f5', borderRadius: normalize(7), height: wp(11), width: wp(11) }}>
              <RNImage source={require('../../assets/images/password.png')} style={{ height: wp(6), width: wp(6), tintColor: '#403e44' }} />
            </View>
            <RNText style={styles.title}>Change Password</RNText>
          </View>
          <RNImage style={{ height: wp(6), width: wp(6), tintColor: '#403e44' }} source={require('../../assets/images/chevron-right.png')} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={cancelSignout}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={{gap: hp(2)}}>
              <View style={{ ...RNStyles.center, backgroundColor: '#f3e8fc', borderRadius: normalize(7), height: wp(11), width: wp(11) }}>
                <RNImage source={require('../../assets/images/warning-sign.png')} style={{ width: wp(7), height: wp(7) }} />
              </View>
              <View style={{gap: hp(.5)}}>
                <Text style={styles.modalTitle}>Sign out From WeonePrime</Text>
                <Text style={styles.modalMessage}>Are you sure you would like to sign out of your WeonePrime account?</Text>
              </View>
            </View>
            <View style={{gap: wp(2)}}>
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButton} onPress={cancelSignout}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton,{ backgroundColor: '#f3e8fc'}]} onPress={confirmSignout}>
                  <Text style={[styles.modalButtonText, {color: '#8f30e8'}]}>Sign out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    ...RNStyles.flexRowBetween,
    paddingVertical: hp(2),
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#bdc0bf',
    borderRadius: normalize(7),
    paddingVertical: hp(1),
    paddingHorizontal: wp(7),
  },
  title: {
    color: '#403e44',
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Medium
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: wp(5),
    gap: hp(3),
    paddingTop: hp(5),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: wp(5),
  },
  modalContainer: {
    width: '90%',
    backgroundColor: Colors.White,
    borderRadius: normalize(20),
    padding: wp(5),
    gap: hp(6)
  },
  modalTitle: {
    fontSize: FontSize.font17,
    fontFamily: FontFamily.SemiBold,
  },
  modalMessage: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
    color: '#403e44',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp(1.2),
    borderRadius: normalize(7),
    backgroundColor: '#8f30e8',
    marginRight: wp(2)
  },
  modalButtonText: {
    color: Colors.White,
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Medium,
  },
});
