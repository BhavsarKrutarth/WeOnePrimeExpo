import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { RNImage, RNStyles, RNText } from '../../../common';
import { Images } from '../../../constants';
import { Colors, FontFamily, FontSize, hp, useCustomFonts, wp } from '../../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function Amenities() {
  const Data = [
    {
      id: 1,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 2,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 3,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 4,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 5,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 6,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <LinearGradient
        start={{ x: 0, y: .9 }}
        end={{ x: 0, y: 0 }}
        colors={['white', 'transparent']} 
        style={styles.gradient}
      />
      <View style={styles.infoContainer}>
        <RNImage source={item.brandLogo} style={{height: wp(10),width: wp(10)}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.ExploreData}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ExploreData: {
    gap: hp(2),
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: 'center'
  },
  card: {
    backgroundColor: Colors.White,
    borderRadius: wp(3),
    overflow: 'hidden',
    width: wp(45),
    height: wp(45),
    position: 'relative',
    margin: wp(2),
  },
  image: {
    width: wp(45),
    height: wp(45),
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(25), 
  },
  infoContainer: {
    position: 'absolute',
    bottom: hp(-.5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: 'center'
  },
  title: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black, 
  },
  subtitle: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Medium,
    marginBottom: hp(1),
    color: Colors.Grey
  },
});
