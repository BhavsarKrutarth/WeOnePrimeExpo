import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors, FontFamily, FontSize, wp, hp } from "../../../theme";
import { Images } from "../../../constants";
import { RNImage, RNStyles, RNText } from "../../../common";

export default function RecentTransactions({ data }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const transactions = data?.SubDetails?.map((item, index) => ({
    id: index + 1,
    logo: { uri: item.CompanyLogo },
    name: item.CompanyName,
    date: formatDate(item.WP_date),
    amount: `₹${item.Amount}`,
    status: item.WP_UserTranscationStatus,
  })) || [];

  const renderTransaction = ({ item, index }) => (
    <View style={styles.transactionContainer}>
      <View style={{ flexDirection: "row", gap: wp(5) }}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <RNImage source={item.logo} style={styles.logo} />
          </View>
          {transactions.length > 1 && index < transactions.length - 1 && (
            <View style={styles.line} />
          )}
        </View>

        <View>
          <Text style={styles.transactionName}>{item.name}{" "}</Text>
          <Text style={styles.transactionDate}>{item.date}{" "}</Text>
        </View>
        <View style={[styles.dashedBorder, { display: transactions.length > 1 && index < transactions.length - 1 ? 'flex' : 'none', }]} />
      </View>
      <View style={styles.transactionAmountContainer}>
        <Text style={styles.transactionAmount}>{item.amount}{" "}</Text>
        <Text
          style={[
            styles.transactionStatus,
            item.status === "Received" ? { color: Colors.Green } : { color: Colors.DarkGrey },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>   
  );

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.Icon} source={require('../../../assets/images/transactionEffect.png')} />
      <View style={{ alignContent: 'center' }}>
        <RNText style={styles.title}>Recent Transaction</RNText>
        <RNText style={styles.subTitle}>
          Reference site about Lorem Ipsum.
        </RNText>
      </View>

      <View style={styles.membershipCard}>
        <View style={{ ...RNStyles.flexRow, gap: wp(3), alignItems: 'center' }}>
          <RNImage source={Images.weoneLogo} style={styles.membershipLogo} />
          <View style={styles.membershipInfo}>
            <RNText style={styles.membershipTitle}>
              WEONE Prime Membership{" "}
            </RNText>
            <RNText style={{ color: '#FF5C5C', fontSize: FontSize.font12, marginTop: hp(-0.5) }}>
              ●{" "}<RNText style={styles.membershipStatus}>Not Active{" "}</RNText>
            </RNText>
            <TouchableOpacity style={styles.joinButton}>
              <RNText style={styles.joinButtonText}>JOIN NOW{" "}</RNText>
            </TouchableOpacity>
          </View>
        </View>
        <RNImage
          source={Images.RightIcon}
          style={{ height: wp(3), width: wp(3) }}
        />
      </View>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.moreButton}>
        <RNText style={styles.moreButtonText}>15+ MORE TRANSACTIONS{" "}</RNText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp(3),
    gap: hp(3),
    marginTop: hp(3),
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
  },
  subTitle: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Light,
  },
  membershipCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: wp(3),
  },
  membershipLogo: {
    width: wp(15),
    height: wp(15),
  },
  membershipTitle: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
  },
  membershipStatus: {
    fontSize: FontSize.font10,
    color: Colors.DarkGrey,
    fontFamily: FontFamily.Light,
  },
  joinButton: {
    width: wp(22),
    backgroundColor: Colors.Black,
    marginVertical: hp(2),
    paddingVertical: wp(1.5),
    borderRadius: wp(1.5),
    alignItems: "center",
  },
  joinButtonText: {
    color: Colors.White,
    fontFamily: FontFamily.SemiBold,
    fontSize: FontSize.font9,
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleContainer: {
    alignItems: "center",
    width: wp(15),
  },
  circle: {
    width: wp(15),
    height: wp(15),
    borderRadius: 50,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: wp(10),
    height: wp(10),
  },
  line: {
    width: wp(2),
    height: hp(3),
    backgroundColor: "#F0F0F0",
  },
  dashedBorder: {
    borderWidth: 0.8,
    borderColor: Colors.D9D9D9,
    borderStyle: "dashed",
    width: wp(70),
    position: 'absolute',
    bottom: hp(1.5),
    left: wp(9),

  },
  transactionName: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Medium,
    marginTop: hp(1.5),
  },
  transactionDate: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
  },
  transactionAmountContainer: {
    alignItems: "flex-end",
    marginTop: hp(1.5),
  },
  transactionAmount: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  transactionStatus: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.Medium,
  },
  moreButton: {
    backgroundColor: Colors.Black,
    padding: wp(2),
    borderRadius: wp(3),
    width: wp(50),
    alignSelf: 'center'
  },
  moreButtonText: {
    color: Colors.White,
    fontFamily: FontFamily.Medium,
    fontSize: FontSize.font10,
    textAlign: 'center'
  },
  Icon: {
    width: wp(100),
    height: hp(25),
    position: "absolute",
    top: hp(0),
    left: wp(-12),
  },
});
