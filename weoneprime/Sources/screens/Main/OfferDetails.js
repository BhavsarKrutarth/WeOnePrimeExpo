import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  LayoutAnimation,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  UIManager,
  Vibration,
  View,
} from "react-native";
import {
  RNButton,
  RNCommonHeader,
  RNContainer,
  RNImage,
  RNStyles,
  RNText,
} from "../../common";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants";
import { Colors, FontFamily, FontSize, hp, normalize, wp } from "../../theme";
import Icon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FetchMethod from "../../api/FetchMethod";
import RenderHtml from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { SET_REDEEMDATA } from "../../redux/Reducers/RedeemReducer";

const OfferDetails = ({ route, navigation }) => {
  const { companyId } = route.params;
  const dispatch = useDispatch();
  const { balanceData } = useSelector(({ BalaceData }) => BalaceData);
  const [selectedSection, setSelectedSection] = useState("About");
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedIndices, setLikedIndices] = useState([]);

  const source = {
    html:
      data.HowToUse && data.HowToUse.length > 0
        ? data.HowToUse[0].Description
        : "",
  };

  const Terms = {
    html: data.TermCondtion ? data.TermCondtion : "",
  };
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FetchMethod.GET({
          EndPoint: `CompanyList/${companyId}`,
        });
        if (response && response.Companies) {
          setData(response.Companies[0]);
        }
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const sections = [
    { id: "1", title: "About" },
    { id: "2", title: "Terms & Conditions" },
    { id: "3", title: "FAQs" },
  ];

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(faqId === expandedFAQ ? null : faqId);
  };

  const onLikeButtonPress = async () => {
    const isLiked = likedIndices.includes(companyId);
    setLikedIndices((prev) =>
      isLiked ? prev.filter((id) => id !== companyId) : [...prev, companyId]
    );
    try {
      const response = await FetchMethod.POST({
        EndPoint: `FavoritesData?UserLoginid=1&WP_Companyid=${companyId}`,
      });
      console.log('response',response);
    } catch (error) {
      console.error("Error updating favorites: ", error);
    }
  };

  const renderFAQ = () => (
    <View>
      {data.WP_CompanyFAQ?.map((faq) => (
        <View
          key={faq.QuestionID}
          style={{
            backgroundColor: Colors.LightGrey,
            borderRadius: normalize(10),
            marginVertical: hp(0.5),
          }}
        >
          <TouchableOpacity
            style={styles.faqContainer}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              toggleFAQ(faq.QuestionID);
            }}
          >
            <RNText style={styles.questionText}>{faq.QuestionText}</RNText>
            <Entypo
              name={
                expandedFAQ === faq.QuestionID ? "chevron-up" : "chevron-down"
              }
              size={wp(5)}
              color={Colors.DarkGrey}
            />
          </TouchableOpacity>
          {expandedFAQ === faq.QuestionID && (
            <Text style={styles.answerText}>{faq.AnswerText}</Text>
          )}
        </View>
      ))}
    </View>
  );

  const handleRedeemData = async () => {
    try {
      const response = await FetchMethod.GET({
        EndPoint: `ScanCompany/GetScanData?WP_Companyid=${companyId}&UserLoginid=1`,
      });
      if (response && response.scanData.ResponseCode === 0) {
        dispatch(SET_REDEEMDATA(response.scanData));
        closeModal();
        navigation.navigate("Redeem");
      } else {
        alert("Unable to redeem. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const RequestSubscriber = async () => {
    try {
      Vibration.vibrate();
      const response = await FetchMethod.POST({
        EndPoint: `Membership?UserLoginid=1`
      })
      console.log('response',response);
      if (response != "") {
        
      }
    } catch (error) {
      console.log('error',error); 
    }
  }

  const sectionContent = {
    About: <RNText style={styles.contentText}>{data.About}</RNText>,
    "Terms & Conditions": <RenderHtml source={Terms} />,
    FAQs: <View style={{ marginBottom: hp(2) }}>{renderFAQ()}</View>,
  };

  const renderSectionItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.sectionButton,
        selectedSection === item.title && { backgroundColor: Colors.LightGrey },
      ]}
      onPress={() => setSelectedSection(item.title)}
    >
      <Text style={styles.sectionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleOffer = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <RNContainer>
      <RNCommonHeader title={data.CompanyName} />

      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.DarkGrey}
          style={RNStyles.flexCenter}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: data.CompanyImage }}
              style={styles.bannerImage}
            />
            <LinearGradient
              start={{ x: 0, y: 1.5 }}
              end={{ x: 0, y: 0 }}
              colors={["white", "white", "#ffffff2b", "transparent"]}
              style={styles.gradient}
            />
             <TouchableOpacity
              style={styles.likeButton}
              onPress={onLikeButtonPress}
            >
              <Icon
                name="heart"
                size={FontSize.font12}
                color={likedIndices.includes(companyId) ? "red" : Colors.White}
              />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <RNImage source={{ uri: data.CompanyLogo }} style={styles.logo} />
              <RNText style={styles.title}>{data.CompanyName}</RNText>
              <RNText style={styles.subtitle}>
                {data.CompanysDescription}{" "}
              </RNText>
            </View>
          </View>

          <View style={{ paddingHorizontal: wp(5) }}>
            <View style={styles.howToUseContainer}>
              <RNText
                color={Colors.White}
                size={FontSize.font15}
                family={FontFamily.Medium}
              >
                How to use:{" "}
              </RNText>
            </View>
            <RenderHtml source={source}/>
            <View style={styles.howToUseContainer}>
              <RNText
                color={Colors.White}
                size={FontSize.font15}
                family={FontFamily.Medium}
              >
                About Amrut:{" "}
              </RNText>
            </View>
            <View style={styles.rewardContainer}>
              {/* <View style={RNStyles.flexRow}>
                <MaterialCommunityIcons
                  name={"clock-time-three-outline"}
                  style={{ fontSize: FontSize.font14 }}
                />
                <RNText size={FontSize.font13} family={FontFamily.Medium}>
                  15.18
                </RNText>
              </View> */}
              <RNText size={FontSize.font10} pTop={hp(1)}>
                Reward ready to scan in our shop
              </RNText>

              <View>
                <RNButton
                  title="Scan Now"
                  style={{ paddingVertical: hp(1), marginTop: hp(2) }}
                  textStyle={styles.buttonText}
                  gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
                  onPress={handleOffer}
                />
              </View>
            </View>
            <RNText
              size={FontSize.font8}
              color={Colors.DarkGrey}
              align={"center"}
              pBottom={hp(2)}
            >
              Month End offers: Buy classic woman suits at Rs. 599 only. Grab
              this offer now.
            </RNText>
          </View>

          <View style={{ paddingHorizontal: wp(5) }}>
            <FlatList
              horizontal
              data={sections}
              renderItem={renderSectionItem}
              keyExtractor={(item) => item.id}
              style={styles.SectionList}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.contentContainer}>
              {sectionContent[selectedSection]}
            </View>
          </View>

          <View style={styles.OfferDetails}>
            <RNText style={[styles.sectionContent, { textAlign: "center" }]}>
              Join weone prime to avail this offer
            </RNText>
            <RNButton
              title={
                <RNText style={styles.buttonText}>
                  EXTEND MEMBERSHIP FOR{" "}
                  <RNText
                    style={[
                      styles.buttonText,
                      { textDecorationLine: "line-through" },
                    ]}
                  >
                    {balanceData.compare_price}
                  </RNText>{" "}
                  {balanceData.final_Price}
                </RNText>
              }
              onPress={() => {RequestSubscriber()}}
              textStyle={styles.buttonText}
              gradientColors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
            />
          </View>
        </ScrollView>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <LinearGradient
                  colors={["#07CCDA", "#5B60E5", "#A95EED", "#DD7B9A"]}
                  start={{ x: 0.5, y: 1.2 }}
                  end={{ x: 0, y: 0 }}
                  style={{
                    height: wp(9),
                    width: wp(9),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: normalize(6),
                  }}
                >
                  <RNImage
                    style={{ height: wp(6), width: wp(6) }}
                    source={Images.scan}
                  />
                </LinearGradient>
                <RNText style={styles.sectionText}>Redeem in Showroom?</RNText>
                <RNText size={FontSize.font8} color={Colors.DarkGrey}>
                  scan code at a restaurant within 15 minutes.
                </RNText>
                <View style={[RNStyles.flexRowCenter, { gap: wp(3) }]}>
                  <RNButton
                    style={{
                      backgroundColor: Colors.Black,
                      paddingHorizontal: wp(15),
                      paddingVertical: hp(1.5),
                    }}
                    textStyle={{
                      fontSize: FontSize.font13,
                      fontFamily: FontFamily.Medium,
                    }}
                    title="Cancel"
                    onPress={closeModal}
                  />
                  <RNButton
                    style={{
                      backgroundColor: Colors.LightGrey,
                      paddingHorizontal: wp(15),
                      paddingVertical: hp(1.5),
                    }}
                    textStyle={{
                      fontSize: FontSize.font13,
                      fontFamily: FontFamily.Medium,
                      color: Colors.Black,
                    }}
                    title="Redeem"
                    onPress={() => {handleRedeemData()}}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </RNContainer>
  );
};

export default OfferDetails;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: hp(70),
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
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
  infoContainer: {
    position: "absolute",
    bottom: hp(5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: "center",
  },
  logo: {
    height: wp(18),
    width: wp(18),
    backgroundColor: "white",
    borderRadius: wp(18),
  },
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
    marginTop: hp(1),
  },
  subtitle: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Light,
    color: Colors.Black,
    marginTop: hp(0.5),
  },
  buttonText: {
    fontSize: FontSize.font13,
    color: Colors.White,
    fontFamily: FontFamily.Medium,
  },
  howToUseContainer: {
    paddingHorizontal: wp(5),
    backgroundColor: Colors.Black,
    paddingVertical: hp(0.5),
    justifyContent: "flex-end",
    alignSelf: "flex-start",
    borderRadius: wp(5),
    marginBottom: hp(2),
  },

  bulletPoint: {
    width: normalize(4),
    height: normalize(4),
    backgroundColor: "#D1D1D1",
    borderRadius: normalize(5),
    marginBottom: hp(0.1),
  },

  rewardContainer: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: normalize(16),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    alignItems: "center",
    marginVertical: hp(1),
  },
  sectionButton: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(5),
    borderRadius: wp(2),
    marginVertical: hp(2),
  },
  sectionText: {
    fontSize: FontSize.font14,
    color: Colors.Black,
    fontFamily: FontFamily.SemiBold,
  },
  sectionContent: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
    color: Colors.DarkGrey,
  },
  contentContainer: {
    borderRadius: wp(2),
    alignSelf: "center",
    paddingHorizontal: wp(5),
  },
  OfferDetails: {
    padding: wp(3),
    backgroundColor: Colors.LightGrey,
    width: wp(100),
    borderTopStartRadius: normalize(10),
    borderTopEndRadius: normalize(10),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.White,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    gap: hp(1),
  },
  faqContainer: {
    ...RNStyles.flexRowBetween,
    width: wp(94),
    padding: wp(3),
    paddingVertical: hp(2),
  },
  questionText: {
    fontSize: FontSize.font13,
    fontFamily: FontFamily.SemiBold,
    color: Colors.DarkGrey,
  },
  answerText: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
    color: Colors.DarkGrey,
    paddingHorizontal: wp(2),
    paddingBottom: hp(2),
  },
  contentText: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Regular,
    color: Colors.DarkGrey,
    paddingBottom: hp(3),
  },
});
