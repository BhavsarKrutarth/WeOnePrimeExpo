import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { RNStyles, RNText } from "../../common";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import { Images } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

const TabContent = ({ state, descriptors, navigation }) => {
  return (
    <View style={[styles.tabContainer, { backgroundColor: Colors.Transparent }]}>
      <LinearGradient
        colors={['#260f43', '#171017']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress", 
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const ICONS = [isFocused ? Images.F_Explore : Images.Explore, isFocused ? Images.F_Home : Images.Home, isFocused ? Images.F_Setting : Images.Setting];
          const isCenterTab = index === 1;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.flexCenter}
            >
              {isCenterTab ? (
                <View>
                  <LinearGradient
                    colors={['#070FDA', '#A95EED']}
                    start={{ x: 0, y: 1.8 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.centerTabImageBackground}
                  >
                    <Image
                      source={ICONS[index]}
                      resizeMode="contain"
                      style={styles.centerTabIcon}
                    />
                  </LinearGradient>
                </View>
              ) : (
                <Image
                  source={ICONS[index]}
                  resizeMode="contain"
                  style={[
                    styles.icons 
                  ]}
                />
              )}
              <RNText
                size={FontSize.font11}
                family={FontFamily.Medium}
                color={Colors.White}
                style={isCenterTab && styles.centerTabText}
              >
                {label}
              </RNText>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: hp(2),
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  container: {
    ...RNStyles.flexRowEvenly,
    height: hp(7),
    width: wp(80),
    borderRadius: 50,
  },
  icons: {
    width: wp(7),
    height: wp(7),
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerTabImageBackground: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(-5),
  },
  centerTabIcon: {
    width: wp(7),
    height: wp(7),
  },
  centerTabText: {
    marginTop: hp(1),
  },
});

export default TabContent;
