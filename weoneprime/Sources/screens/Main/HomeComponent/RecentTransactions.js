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

export default function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      logo: Images.Inox,
      name: "INOX",
      date: "11 Feb, 2023",
      amount: "₹2000",
      status: "Received",
    },
    {
      id: 2,
      logo: Images.Inox,
      name: "Gollers locho khaman",
      date: "10 Feb, 2023",
      amount: "₹2000",
      status: "Payment",
    },
    {
      id: 3,
      logo: Images.Inox,
      name: "Coffee Culture",
      date: "9 Feb, 2023",
      amount: "₹2000",
      status: "Payment",
    },
    {
      id: 4,
      logo: Images.Inox,
      name: "G3+ Fashion",
      date: "9 Feb, 2023",
      amount: "₹2000",
      status: "Received",
    },
  ];

  const renderTransaction = ({ item, index }) => (
    <View style={styles.transactionContainer}>
      <View style={{ flexDirection: "row", gap: wp(5) }}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <RNImage source={item.logo} style={styles.logo} />
          </View>
          {index < transactions.length - 1 && <View style={styles.line} />}
        </View>

        <View>
          <Text style={styles.transactionName}>{item.name}{" "}</Text>
          <Text style={styles.transactionDate}>{item.date}{" "}</Text>
        </View>
      </View>
      {/* Amount and Status */}
      <View style={styles.transactionAmountContainer}>
        <Text style={styles.transactionAmount}>{item.amount}{" "}</Text>
        <Text
          style={[
            styles.transactionStatus,
            item.status === "Received" ? styles.received : styles.payment,
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <ImageBackground resizeMode="contain" style={{height: hp(30),width: wp(100)}} source={require('../../../assets/images/ASSETS.png')}> */}
      <View style={{alignContent: 'center'}}>
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
            <RNText style={{ color: Colors.Red, fontSize: FontSize.font12,marginTop: hp(-.5) }}>
              ●<RNText style={styles.membershipStatus}>Not Active{" "}</RNText>
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
      {/* </ImageBackground> */}
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {/* More Transactions Button */}
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
    marginTop:hp(3),
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
  received: {
    color: Colors.Green,
  },
  payment: {
    color: Colors.DarkGrey,
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
});
