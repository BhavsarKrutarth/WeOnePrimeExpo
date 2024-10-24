import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator, // Import ActivityIndicator for the loader
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import FetchMethod from "../../api/FetchMethod";
import { Images } from "../../constants";

export default function Amenities() {
  const navigation = useNavigation();
  const [selectedHearts, setSelectedHearts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchMethod.GET({
          EndPoint: "CompanyList",
        });

        if (response && response.Companies) {
          setData(response.Companies);
        }
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleHeartPress = (id) => {
    setSelectedHearts((prevSelectedHearts) => {
      if (prevSelectedHearts.includes(id)) {
        return prevSelectedHearts.filter((heartId) => heartId !== id);
      } else {
        return [...prevSelectedHearts, id];
      }
    });
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedHearts.includes(item.WP_Companyid);
    return (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate("OfferDetails", { companyId: item.WP_Companyid })
        }
      >
        <Image source={{ uri: item.CompanyImage }} style={styles.image} />
        <LinearGradient
          start={{ x: 0, y: 1.2 }}
          end={{ x: 0, y: 0 }}
          colors={["white", "white", "#ffffff2b", "transparent"]}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={{
            ...RNStyles.center,
            height: wp(7),
            width: wp(7),
            backgroundColor: isSelected
              ? "rgba(255, 255, 255, 0.35)"
              : "rgba(255, 255, 255, 0.35)",
            position: "absolute",
            top: hp(1),
            borderRadius: 50,
            right: wp(2),
          }}
          onPress={() => {
            handleHeartPress(item.WP_Companyid);
          }}
        >
          <Icon
            name={"heart"}
            solid={isSelected}
            style={{
              fontSize: FontSize.font12,
              color: isSelected ? Colors.Red : Colors.White,
            }}
          />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <RNImage
            source={{ uri: item.CompanyLogo }}
            style={{ height: wp(13), width: wp(13) }}
          />
          <Text style={styles.title}>{item.CompanyName}</Text>
          <Text style={styles.CompanysDescription}>
            {item.CompanysDescription}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <RNContainer style={{ flex: 1 }}>
      <RNCommonHeader title={"Our Amenities"} />
      <View style={styles.ExploreData}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.DarkGrey}
            style={RNStyles.flexCenter}
          />
        ) : (
          <>
            {data.length > 0 ? (
              <FlatList
                style={{ paddingTop: hp(2) }}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.WP_Companyid.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: hp(1.5) }} />
                )}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={Images.nodata}
                  style={{
                    width: wp(30),
                    height: wp(30),
                    resizeMode: "contain",
                    marginBottom: hp(2),
                  }}
                />
                <RNText>No Data Found !</RNText>
                {/* <RNText
                  pVertical={hp(1)}
                  pHorizontal={wp(10)}
                  family={FontFamily.Regular}
                  color={Colors.DarkGrey}
                  align={"center"}
                  size={FontSize.font10}
                >
                  Explore weone prime and mask benefits as favorites. we will
                  save the for you here.
                </RNText> */}
              </View>
            )}
          </>
        )}
      </View>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  ExploreData: {
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: "center",
  },
  card: {
    borderRadius: wp(2),
    width: wp(45),
    height: wp(45),
    marginHorizontal: wp(1.5),
    overflow: "hidden",
    marginBottom: hp(2),
  },
  image: {
    width: wp(45),
    height: wp(45),
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    opacity: 1,
  },
  infoContainer: {
    position: "absolute",
    bottom: hp(-0.5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  CompanysDescription: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    marginBottom: hp(1),
    color: Colors.Grey,
  },
});
