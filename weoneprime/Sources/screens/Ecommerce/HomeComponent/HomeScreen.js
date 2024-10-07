import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  RNContainer,
  RNImage,
  RNInput,
  RNStyles,
  RNText,
} from "../../../common";
import {
  Colors,
  FontFamily,
  FontSize,
  hp,
  normalize,
  wp,
} from "../../../theme";
import { Images } from "../../../constants";
import {
  renderCategoryItem,
  renderDealofDay,
  renderOffersItem,
  onCategorySelect,
  renderDealsItem,
  renderTodayEdit,
  renderExclusive,
} from "./modal";
import Entypo from "react-native-vector-icons/Entypo";

export default function HomeScreen({ }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentdealIndex, setCurrentdealIndex] = useState(0);
  const flatListRef = useRef(null);
  const slideInterval = useRef(null);

  const categories = [
    { id: "1", name: "All", logo: require("../../../assets/images/gift.png") },
    { id: "2", name: "Food", logo: require("../../../assets/images/gift.png") },
    {
      id: "3",
      name: "Fashion",
      logo: require("../../../assets/images/gift.png"),
    },
    { id: "4", name: "GYM", logo: require("../../../assets/images/gift.png") },
  ];

  const Data = [
    { id: "1", image: Images.exclusive1 },
    { id: "2", image: Images.exclusive1 },
    { id: "3", image: Images.exclusive1 },
    { id: "4", image: Images.exclusive1 },
  ];

  const Exclusive = [
    { id: "1", image: require("../../../assets/images/chanel.png") },
    { id: "2", image: require("../../../assets/images/chanel.png") },
    { id: "3", image: require("../../../assets/images/chanel.png") },
    { id: "4", image: require("../../../assets/images/chanel.png") },
  ];

  const Offers = [
    {
      id: "1",
      name: "Titan, Casio...",
      OfferDesc: "Min 30% Off",
      logo: require("../../../assets/images/watch.png"),
      coloCode: "#bcdbff",
    },
    {
      id: "2",
      name: "Titan, Casio...",
      OfferDesc: "Min 30% Off",
      logo: require("../../../assets/images/watch.png"),
      coloCode: "#A3CFAA",
    },
    {
      id: "3",
      name: "Titan, Casio...",
      OfferDesc: "Min 30% Off",
      logo: require("../../../assets/images/watch.png"),
      coloCode: "#e2adc0",
    },
  ];

  const dealOfDayData = [
    {
      id: "1",
      name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
      Product: "MAMAEARTH",
      productDesc: "Mamaearth Vitamin C Daily Glow Face Serum",
      logo: require("../../../assets/images/dealofday.png"),
      price: "UNDER 299",
    },
    {
      id: "2",
      name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
      Product: "MAMAEARTH",
      productDesc: "Mamaearth Vitamin C Daily Glow Face Serum",
      logo: require("../../../assets/images/gift.png"),
      price: "UNDER 299",
    },
    {
      id: "3",
      name: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
      Product: "MAMAEARTH",
      productDesc: "Mamaearth Vitamin C Daily Glow Face Serum",
      logo: require("../../../assets/images/watch.png"),
      price: "UNDER 299",
    },
  ];

  const DealsItem = [
    {
      id: "1",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../../assets/images/watch.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
    {
      id: "2",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../../assets/images/watch.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
    {
      id: "3",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../../assets/images/watch.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
  ];

  const TodayEdit = [
    {
      id: "1",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../../assets/images/watch.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
    {
      id: "2",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../../assets/images/watch.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
    {
      id: "3",
      productDesc: "Blue, Fast Charging for Mobile",
      Product: "SmartBuy 10000 mAh 12 W Power bank",
      image: require("../../../assets/images/watch.png"),
      price: "1599",
      DiscPrice: "999",
      OfferRate: "53% Off",
    },
  ];

  const getNumColumns = (data) => {
    const length = data.length;
    if (length === 4) return 2;
    if (length % 3 === 0) return 3;
    if (length > 4 && length % 4 === 0) return 4;
    return 2; // Default to 2 columns
  };

  const handleNext = () => {
    setCurrentdealIndex((prevIndex) => (prevIndex + 1) % dealOfDayData.length);
  };

  const handlePrevious = () => {
    setCurrentdealIndex((prevIndex) =>
      prevIndex === 0 ? dealOfDayData.length - 1 : prevIndex - 1
    );
  };

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= Data.length) {
        nextIndex = 0;
      }
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <RNContainer style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator="false"
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            paddingHorizontal: wp(2),
            backgroundColor: "#F0F0F0",
            borderBottomRightRadius: normalize(15),
            borderBottomLeftRadius: normalize(15),
          }}
        >
          {/* search Input */}
          <View>
            <RNInput
              containerStyle={styles.inputField}
              iconstyle={{
                width: wp(3),
                height: wp(3),
                tintColor: Colors.Grey,
              }}
              inputStyle={{
                borderRadius: 50,
                height: hp(4),
                borderColor: "#D6D6D6",
              }}
              style={{
                fontSize: FontSize.font11,
                fontFamily: FontFamily.Medium,
              }}
              Icon={Images.search}
              placeholder="Search for products, Brands and More"
              placeholderTextColor={Colors.Black}
            />
          </View>

          {/* Category Items */}
          <FlatList
            data={categories}
            renderItem={(item) => renderCategoryItem(item, onCategorySelect)}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Banner View */}
        <View style={{ paddingHorizontal: wp(3), paddingVertical: hp(1.5) }}>
          <FlatList
            data={Data}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ marginRight: wp(2) }}>
                <RNImage
                  source={item.image}
                  style={styles.image}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={flatListRef}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
          {/* Dot Indicators */}
          <View style={styles.dotsContainer}>
            {Data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index
                    ? styles.activeDot
                    : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Offer Items */}
        <FlatList
          data={Offers}
          renderItem={(item) => renderOffersItem(item, onCategorySelect)}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: wp(3) }}
        />

        {/* Deal of the Day */}
        <View>
          <FlatList
            data={[dealOfDayData[currentdealIndex]]}
            renderItem={({ item }) =>
              renderDealofDay({ item, handlePrevious, handleNext })
            }
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        </View>

        <RNImage
          source={require("../../../assets/images/SUBSCRIPTION.png")}
          style={{ width: wp(100), height: hp(15) }}
          resizeMode={"strech"}
        />

        {/* Steal Deals: Limited Units Only */}
        <View style={{ paddingHorizontal: wp(3) }}>
          <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
            Steal Deals: Limited Units Only
          </RNText>
          <RNText
            size={FontSize.font11}
            family={FontFamily.Light}
            color={Colors.Grey}
          >
            Reference site about Lorem Ipsum
          </RNText>
          <FlatList
            data={DealsItem}
            renderItem={({ item }) => renderDealsItem({ item })}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              ...RNStyles.flexWrapHorizontal,
              gap: wp(2.5),
              paddingBottom: hp(4),
            }}
          />
          <TouchableOpacity style={styles.orderButton}>
            <RNText
              size={FontSize.font11}
              family={FontFamily.SemiBold}
              color={Colors.White}
              align={"center"}
            >
              Place Order
            </RNText>
          </TouchableOpacity>
        </View>

        {/* TODAY’S EDIT */}
        <View style={{ paddingLeft: wp(3), paddingTop: hp(5) }}>
          <View style={[RNStyles.flexRowBetween, { paddingHorizontal: wp(3) }]}>
            <View>
              <RNText size={FontSize.font13} family={FontFamily.SemiBold}>
                TODAY’S EDIT
              </RNText>
              <RNText
                size={FontSize.font11}
                family={FontFamily.SemiBold}
                color={Colors.Grey}
                pBottom={hp(2)}
              >
                EXCLUSIVE DEALS UNLOCED
              </RNText>
            </View>
            <View style={[RNStyles.flexRow, { gap: wp(1) }]}>
              <TouchableOpacity style={styles.DealofDayIcon}>
                <Entypo name={"chevron-left"} size={25} color={"#909090"} />
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity style={styles.DealofDayIcon}>
                <Entypo name={"chevron-right"} size={25} color={"#909090"} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={TodayEdit}
            renderItem={({ item }) => renderTodayEdit({ item })}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              ...RNStyles.flexRow,
              gap: wp(2.5),
              paddingBottom: hp(4),
            }}
          />
        </View>

        {/* Exclusive */}
        <View style={RNStyles.center}>
          <RNImage
            source={Images.exclusive}
            style={{ width: wp(30), height: wp(10) }}
          />
          <RNText
            size={FontSize.font10}
            family={FontFamily.Light}
            color={Colors.Grey}
          >
            Curated experiences and Preferential pricing
          </RNText>
        </View>

        <FlatList
          data={Exclusive}
          renderItem={({ item }) => renderExclusive({ item })}
          keyExtractor={(item) => item.id.toString()}
          numColumns={getNumColumns(Exclusive)}
          key={getNumColumns(Exclusive)}
          contentContainerStyle={{
            paddingHorizontal: wp(3),
            alignSelf: "center",
            justifyContent: "space-between",
          }}
          ItemSeparatorComponent={(props) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: "#D9D9D9",
              }}
            />
          )}
        />

        <RNImage
          source={require("../../../assets/images/coupen.png")}
          style={{
            width: wp(94),
            height: hp(10),
            alignSelf: "center",
            marginVertical: hp(5),
          }}
          resizeMode={"strech"}
        />
      </ScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1.5,
    borderColor: "#DADADA",
    borderRadius: normalize(12),
    height: hp(4),
    paddingHorizontal: wp(3),
  },
  image: {
    width: wp(94),
    height: hp(20),
    borderRadius: normalize(10),
  },
  dotsContainer: {
    ...RNStyles.flexRowCenter,
    alignSelf: "center",
    position: "absolute",
    bottom: hp(0.5),
    marginVertical: hp(2),
  },
  dot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: 4,
    marginHorizontal: wp(1),
  },
  activeDot: {
    borderWidth: 1,
    borderColor: Colors.DarkGrey,
    backgroundColor: Colors.White,
  },
  inactiveDot: {
    borderWidth: 1,
    borderColor: Colors.DarkGrey,
  },
  orderButton: {
    backgroundColor: Colors.Black,
    borderRadius: normalize(4.5),
    alignSelf: "center",
    paddingHorizontal: wp(8),
    paddingVertical: wp(1.5),
  },
  line: {
    borderWidth: normalize(1),
    borderColor: "#D6D6D6",
    height: hp(2.5),
  },
});
