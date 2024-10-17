import React, { useRef, useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import { RNImage, RNStyles, RNText } from "../../../common";
import { Images } from "../../../constants";
import {
  Colors,
  FontFamily,
  FontSize,
  hp,
  normalize,
  wp,
} from "../../../theme";
import { LinearGradient } from "expo-linear-gradient";

export default function Exclusive({ data, dataLength }) {
  const Data = data?.SubDetails;
  console.log(Data);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const intervalTime = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (dataLength) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex = dataLength - 1 ? 0 : prevIndex + 1);
          return nextIndex;
        });
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <Pressable style={styles.card}>
      <RNImage
        source={{ uri: item.BannerImage }}
        style={styles.image}
        resizeMode={"strach"}
      />
      <LinearGradient
         start={{ x: 0, y: 1.5 }}
         end={{ x: 0, y: 0 }}
         colors={["white", "white", "#ffffff2b", "transparent"]}
        style={styles.gradient}
      />
      {/* <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.availButton}>
          <Text style={styles.availText}>Available Now </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View> */}
    </Pressable>
  );

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {Data?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  currentIndex === index ? Colors.DarkGrey : Colors.D9D9D9,
              },
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
        <RNText style={styles.subTitle}>
          Curated experiences and Preferential pricing.
        </RNText>
      </View>
      <FlatList
        ref={flatListRef}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
    padding: wp(3),
    marginBottom: hp(2),
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
    marginTop: hp(2),
    marginBottom: hp(1),
    overflow: "hidden",
    width: wp(94),
    height: hp(22),
  },
  image: {
    width: wp(94),
    height: hp(22),
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
  },
  infoContainer: {
    position: "absolute",
    bottom: hp(1),
    left: wp(3),
    right: wp(2),
    gap: hp(0.5),
    zIndex: 100,
    alignItems: "center",
    width: wp(94),
  },
  availButton: {
    backgroundColor: Colors.Black,
    paddingVertical: wp(0.5),
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
    fontFamily: FontFamily.Regular,
    color: Colors.Black,
    fontWeight: "300",
    borderTopWidth: 1,
    borderTopColor: Colors.DarkGrey,
    paddingVertical: hp(0.5),
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    borderRadius: 50,
  },
});
