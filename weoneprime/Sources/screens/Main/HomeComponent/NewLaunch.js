import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../../theme";
import { RNStyles, RNText } from "../../../common";

const { width } = Dimensions.get("screen");
const itemWidth = wp(65);
const itemHeight = hp(20);

export default function NewLaunch({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(8); 
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.x;
  });

  const selectedData = data?.[selectedIndex]?.SubDetails || [];

  return (
    <View style={styles.flex}>
      <View style={[RNStyles.flexRowCenter, { gap: wp(3) }]}>
        <TouchableOpacity
          style={[styles.button, selectedIndex === 8 ? {backgroundColor: Colors.Black} : {backgroundColor: "#DEDEDE",}]}
          onPress={() => setSelectedIndex(8)}
        >
          {selectedIndex === 8 && (
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/NewlaunchEff.png')}
            style={styles.buttonIcon}
          />)}
           
          <RNText color={Colors.White} size={FontSize.font11} family={FontFamily.Medium} style={{color: selectedIndex === 8 ? Colors.White : Colors.Black}} >
            New Launches
          </RNText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedIndex === 9 ? {backgroundColor: Colors.Black} : {backgroundColor: "#DEDEDE"}]}
          onPress={() => setSelectedIndex(9)}
        >
          {selectedIndex === 9 && (
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/NewlaunchEff.png')}
            style={styles.buttonIcon}
          />)}
          <RNText color={Colors.White} size={FontSize.font11} family={FontFamily.Medium} style={{color: selectedIndex === 9 ? Colors.White : Colors.Black}} >
            Monthly Offers
          </RNText>
        </TouchableOpacity>
      </View>
      <Animated.FlatList
        data={selectedData}
        keyExtractor={(item) => item.WP_HomeScreen_SubDeatilsid.toString()}
        renderItem={({ item, index }) => (
          <Item index={index} scrollY={scrollY} imageSource={item.BannerImage} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        snapToInterval={itemWidth}
        onScroll={scrollHandler}
        decelerationRate="fast"
      />
    </View>
  );
}

function Item({ index, scrollY, imageSource }) {
  const itemScaleStyle = useAnimatedStyle(() => {
    const input = [
      index * itemWidth - itemWidth,
      index * itemWidth,
      index * itemWidth + itemWidth,
    ];
    const output = [0.8, 1, 0.8];
    const clamp = {
      extrapolateLeft: Extrapolate.CLAMP,
      extrapolateRight: Extrapolate.CLAMP,
    };
    return {
      transform: [{ scale: interpolate(scrollY.value, input, output, clamp) }],
    };
  });

  return (
    <Animated.Image
      source={{ uri: imageSource }}
      style={[styles.item, itemScaleStyle]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    paddingBottom: hp(15),
    gap: hp(2),
  },
  item: {
    height: itemHeight,
    width: itemWidth,
    borderRadius: 10,
  },
  list: {
    alignItems: "center",
    paddingHorizontal: (width - itemWidth) / 2,
  },
  button: {
    backgroundColor: Colors.Black,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: normalize(4),
  },
  buttonIcon: {
    position: "absolute",
    top: hp(-0.8),
    zIndex: 1,
    height: wp(7),
    width: wp(7),
    left: wp(-3.5),
  },
});
