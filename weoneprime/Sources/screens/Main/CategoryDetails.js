import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import { RNContainer, RNImage, RNStyles, RNText } from "../../common";
import { Images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import { ProductItem } from "../../components";
import FetchMethod from "../../api/FetchMethod";

export default function CategoryDetails() {
  const categories = [
    {
      id: "1",
      name: "All",
      logo: Images.food,
      images: [
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
      ],
    },
    {
      id: "2",
      name: "food",
      logo: Images.food,
      images: [
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
      ],
    },
    {
      id: "3",
      name: "Fashion",
      logo: Images.food,
      images: [
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
      ],
    },
    {
      id: "4",
      name: "GYM",
      logo: Images.food,
      images: [
        { logo: Images.emp_logo, imageSource: Images.exploreimg },
        { logo: Images.imageLogo, imageSource: Images.exploreimg },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [likedIndices, setLikedIndices] = useState([]);
  const [list, setList] = useState([]);

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const onLikeButtonPress = (index) => {
    if (likedIndices.includes(index)) {
      setLikedIndices(
        likedIndices.filter((likedIndex) => likedIndex !== index)
      );
    } else {
      setLikedIndices([...likedIndices, index]);
    }
  };

  useEffect(() => {
    getListApi();
  }, []);

  const getListApi = async () => {
    try {
      const response = await FetchMethod.GET({
        EndPoint: `CompanyList/GetSpecificData?WP_Categoryid=${2}`,
      });
      console.log("sadasdasdsad", response.Companies);
      setList(response.Companies);
    } catch (error) {}
  };

  console.log("sadasdasdsadasddsad", JSON.stringify(list, null, 2));

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => onCategorySelect(item)}>
      {selectedCategory.id === item.id ? (
        <LinearGradient
          colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
          start={{ x: 1.2, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.categoryItem}
        >
          <View style={[RNStyles.flexRowCenter, { gap: wp(2) }]}>
            <RNImage
              source={item.logo}
              style={{ width: wp(3), height: wp(3) }}
            />
            <RNText
              size={FontSize.font11}
              family={FontFamily.SemiBold}
              color={Colors.White}
            >
              {item.name}
            </RNText>
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.categoryItem}>
          <RNImage source={item.logo} style={{ width: wp(3), height: wp(3) }} />
          <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
            {item.name}
          </RNText>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <RNContainer>
      <View style={{ gap: hp(3), flex: 1 }}>
        <FlatList
          style={styles.imageList}
          data={list}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => (
            <View style={{ backgroundColor: Colors.White }}>
              <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
              />
            </View>
          )}
          renderItem={({ item, index }) => (
            <View style={{ marginHorizontal: wp(2), marginTop: hp(4) }}>
              <View
                style={{
                  ...RNStyles.center,
                  width: wp(12),
                  height: wp(12),
                  borderRadius: normalize(9),
                  position: "absolute",
                  zIndex: 1,
                  top: hp(-3),
                  alignSelf: "center",
                }}
              >
                <RNImage
                  source={item.CompanyLogo}
                  style={{ width: wp(10), height: wp(10) }}
                />
              </View>
              <Image source={item.CompanyImage} style={styles.categoryImage} />
              <TouchableOpacity
                style={styles.likeButton}
                onPress={() => onLikeButtonPress(index)}
              >
                <Icon
                  name={"heart"}
                  style={{
                    fontSize: FontSize.font12,
                    color: likedIndices.includes(index) ? "red" : Colors.White,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* <ProductItem /> */}
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  imageList: {
    marginHorizontal: wp(1),
    flex: 1,
  },
  categoriesList: {
    paddingLeft: wp(3),
    paddingTop: hp(2),
    paddingBottom: hp(1),
    // marginBottom: hp(2),
  },
  categoryItem: {
    ...RNStyles.flexRowCenter,
    gap: wp(2),
    marginRight: wp(2),
    backgroundColor: Colors.LightGrey,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: normalize(6),
  },
  categoryImage: {
    width: wp(45),
    height: hp(30),
    borderRadius: normalize(10),
    marginBottom: hp(3),
  },
  likeButton: {
    ...RNStyles.center,
    height: wp(7),
    width: wp(7),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    top: hp(1),
    borderRadius: 50,
    right: wp(2),
  },
});
