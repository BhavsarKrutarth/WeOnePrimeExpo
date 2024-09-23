import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { Images } from "../../constants";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

const Fevorite = () => {
  const navigation = useNavigation();
  const [selectedHearts, setSelectedHearts] = useState([]);

  const Data = [
    {
      id: 1,
      image: require("../../assets/images/amrutbanner.png"),
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 2,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Inox",
      subtitle: "Live the movie",
    },
    {
      id: 3,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Coffee Culture",
      subtitle: "The taste of freshness",
    },
    {
      id: 4,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Gollers",
      subtitle: "Gollers locho khaman",
    },
    {
      id: 5,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Coffee Culture",
      subtitle: "The taste of freshness",
    },
    {
      id: 6,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Gollers",
      subtitle: "Gollers locho khaman",
    },
  ];

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
    const isSelected = selectedHearts.includes(item.id);

    return (
      <Pressable style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          start={{ x: 0, y: 0.8 }}
          end={{ x: 0, y: -1 }}
          colors={["white", "transparent"]}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={{
            ...RNStyles.center,
            height: wp(7),
            width: wp(7),
            backgroundColor: isSelected
              ? "rgba(222, 33, 39, 0.9)"
              : "rgba(255, 255, 255, 0.35)",
            position: "absolute",
            top: hp(1),
            borderRadius: 50,
            right: wp(2),
          }}
          onPress={() => {
            handleHeartPress(item.id), navigation.navigate("Fevorite");
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
            source={item.brandLogo}
            style={{ height: wp(13), width: wp(13) }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <RNContainer>
      <RNCommonHeader title={"My Fevorite"} />
      {true ? (
        <View style={styles.ExploreData}>
          <FlatList
            style={{ paddingTop: hp(2) }}
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: hp(1.5) }} />}
          />
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
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
          <RNText>Your Favorites list is empty!</RNText>
          <RNText
            pVertical={hp(1)}
            pHorizontal={wp(10)}
            family={FontFamily.Regular}
            color={Colors.DarkGrey}
            align={"center"}
            size={FontSize.font10}
          >
            Explore weone prime and mask benefits as favorites. we will save the
            for you here.
          </RNText>
        </View>
      )}
    </RNContainer>
  );

  // return (
  //   <RNContainer>
  //     <RNCommonHeader title={"My Fevorite"} />
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <Image
  //         source={Images.nodata}
  //         style={{
  //           width: wp(30),
  //           height: wp(30),
  //           resizeMode: "contain",
  //           marginBottom: hp(2),
  //         }}
  //       />
  //       <RNText>Your Favorites list is empty!</RNText>
  //       <RNText
  //         pVertical={hp(1)}
  //         pHorizontal={wp(10)}
  //         family={FontFamily.Regular}
  //         color={Colors.DarkGrey}
  //         align={"center"}
  //         size={FontSize.font10}
  //       >
  //         Explore weone prime and mask benefits as favorites. we will save the
  //         for you here.
  //       </RNText>
  //     </View>
  //   </RNContainer>
  // );
};

export default Fevorite;

const styles = StyleSheet.create({
  ExploreData: {
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: "center",
  },
  card: {
    borderRadius: wp(2),
    width: wp(45),
    height: wp(42),
    marginHorizontal: wp(1.5),
    overflow: "hidden",
  },
  image: {
    width: wp(45),
    height: wp(45),
    // resizeMode: "cover",
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
  subtitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    marginBottom: hp(1),
    color: Colors.Grey,
  },
});
