import React, { useRef, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Animated } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../../common';
import { Images } from '../../../constants';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function Exclusive() {
  const Data = [
    { id: 1, image: Images.exclusive1, subtitle: "Buy 1 & Get 1 Coffee", price: "Absolutely Free...! Worth ₹499" },
    { id: 2, image: Images.exclusive1, subtitle: "Buy 1 & Get 1 Coffee", price: "Absolutely Free...! Worth ₹499" },
    { id: 3, image: Images.exclusive1, subtitle: "Buy 1 & Get 1 Coffee", price: "Absolutely Free...! Worth ₹499" },
    { id: 4, image: Images.exclusive1, subtitle: "Buy 1 & Get 1 Coffee", price: "Absolutely Free...! Worth ₹499" },
    { id: 5, image: Images.exclusive1, subtitle: "Buy 1 & Get 1 Coffee", price: "Absolutely Free...! Worth ₹499" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const intervalTime = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === Data.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
        return nextIndex;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <RNImage source={item.image} style={styles.image} />
      <LinearGradient
        start={{ x: 0, y: .9 }}
        end={{ x: 0, y: 0 }}
        colors={['white', 'transparent']}
        style={styles.gradient}
      />
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.availButton}>
          <Text style={styles.availText}>Available Now{" "}</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </Pressable>
  );

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {Data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentIndex === index ? Colors.DarkGrey : Colors.LightGrey }
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.ExploreData}>
      <View style={RNStyles.center}>
        <RNImage style={styles.exploreIcon} source={Images.exclusive} />
        <RNText style={styles.subTitle}>Curated experiences and Preferential pricing.</RNText>
      </View>
      <FlatList
        ref={flatListRef}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const index = Math.floor(contentOffsetX / wp(94)); 
          setCurrentIndex(index);
        }}
      />
      {renderDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  ExploreData: {
    gap: hp(2),
    padding: wp(3),
    marginTop: hp(2),
  },
  exploreIcon: {
    width: wp(30),
    height: hp(5),
  },
  subTitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    color: Colors.DarkGrey,
  },
  card: {
    backgroundColor: Colors.White,
    overflow: 'hidden',
    width: wp(94),
    height: hp(25),
    position: 'relative',
  },
  image: {
    width: wp(94),
    height: hp(25),
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
    bottom: hp(2),
    left: wp(3),
    right: wp(2),
    gap: hp(.5),
    zIndex: 100,
    alignItems: 'center',
    width: wp(94)
  },
  availButton: {
    backgroundColor: Colors.Black,
    paddingVertical: wp(.5),
    paddingHorizontal: wp(2),
    borderRadius: wp(1.5),
    borderWidth: 1,
    borderColor: Colors.Purple,
  },
  availText: {
    fontSize: FontSize.font11,
    color: Colors.White,
    fontFamily: FontFamily.Medium,
  },
  subtitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Medium,
  },
  price: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Medium,
    borderTopWidth: 1,
    borderTopColor: Colors.Grey,
    paddingVertical: hp(0.5)
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: wp(2),
    height: wp(2), 
    gap: wp(2),
    borderRadius: 50
  },
});
