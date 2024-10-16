import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import {
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import FetchMethod from "../../api/FetchMethod";
import { Images } from "../../constants";

export default function CategoryDetails() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [list, setList] = useState([]);
  const [likedIndices, setLikedIndices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategoriesApi();
  }, []);

  const getCategoriesApi = async () => {
    try {
      const response = await FetchMethod.GET({
        EndPoint: "CompanyList/GetCategories",
      });
      const allCategory = {
        CategoryId: 0,
        CategoryName: "All",
        CategoryImage: "https://your-placeholder-image-url.com/all.png",
      };
      const updatedCategories = [allCategory, ...response.Categories];
      setCategories(updatedCategories);
      setSelectedCategory(allCategory);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      getListApi(selectedCategory.CategoryId);
    }
  }, [selectedCategory]);

  const getListApi = async (categoryId) => {
    try {
      const endpoint = `CompanyList/GetSpecificData?WP_Categoryid=${categoryId}`;
      const response = await FetchMethod.GET({
        EndPoint: endpoint,
      });

      setList(response.Companies);
    } catch (error) {
      console.error("Error fetching category data: ", error);
    }
  };

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const onLikeButtonPress = async (index, WP_Companyid) => {
    const isLiked = likedIndices.includes(index);
    setLikedIndices((prev) =>
      isLiked
        ? prev.filter((likedIndex) => likedIndex !== index)
        : [...prev, index]
    );
    try {
      if (!isLiked) {
        const endpoint = `FavoritesData?UserLoginid=1&WP_Companyid=${WP_Companyid}`;
        const response = await FetchMethod.POST({
          EndPoint: endpoint,
        });
        console.log(response);
      }
    } catch (error) {
      console.error("Error updating favorites: ", error);
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => onCategorySelect(item)}>
      {selectedCategory?.CategoryId === item.CategoryId ? (
        <LinearGradient
          colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
          start={{ x: 1.2, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.categoryItem}
        >
          <View style={[RNStyles.flexRowCenter, { gap: wp(2) }]}>
            <RNImage
              source={Images.category}
              style={{ width: wp(3.5), height: wp(3.5) }}
            />
            <RNText
              size={FontSize.font11}
              family={FontFamily.SemiBold}
              color={Colors.White}
            >
              {item.CategoryName}
            </RNText>
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.categoryItem}>
          <RNImage
            source={{ uri: item.CategoryImage }}
            style={{ width: wp(3), height: wp(3) }}
          />
          <RNText size={FontSize.font11} family={FontFamily.SemiBold}>
            {item.CategoryName}
          </RNText>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <RNContainer>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.DarkGrey}
          style={RNStyles.flexCenter}
        />
      ) : (
        <View style={{ gap: hp(3), flex: 1 }}>
          <FlatList
            style={styles.imageList}
            data={list}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            stickyHeaderIndices={[0]}
            contentContainerStyle={{ paddingBottom: hp(12) }}
            ListHeaderComponent={() => (
              <View style={{ backgroundColor: Colors.White }}>
                <FlatList
                  data={categories}
                  renderItem={renderCategoryItem}
                  keyExtractor={(item) => item.CategoryId.toString()}
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
                    backgroundColor: Colors.Black,
                  }}
                >
                  <RNImage
                    source={{ uri: item.CompanyLogo }}
                    style={{ width: wp(10), height: wp(10) }}
                  />
                </View>
                <Image
                  source={{ uri: item.CompanyImage }}
                  style={styles.categoryImage}
                />
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={() => onLikeButtonPress(index, item.WP_Companyid)}
                >
                  <Icon
                    name={"heart"}
                    style={{
                      fontSize: FontSize.font12,
                      color: likedIndices.includes(index)
                        ? "red"
                        : Colors.White,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
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
