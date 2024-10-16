import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Images } from "../../../constants";
import { hp, wp } from "../../../theme";

const { width } = Dimensions.get("screen");
const itemWidth = wp(65);
const itemHeight = hp(20);

export default function NewLaunch({data}) {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.x;
  });

  return (
    <View style={styles.flex}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ index }) => <Item index={index} scrollY={scrollY} />}
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

function Item({ index, scrollY }) {
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
      source={Images.newlaunch1}
      style={[styles.item, itemScaleStyle]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    paddingBottom: hp(10),
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
});
