import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./BottomTabs";
import AuthNavigation from "./AuthNavigation";

import { Colors, hp, useCustomFonts, wp } from "../theme";
import { Amenities, Fevorite, OfferDetails } from "../screens/Main";
import TabBar from "./BottomTabs";
import CategoryDetails from "../screens/Main/CategoryDetails";
import HomeScreen from "../screens/Ecommerce/HomeComponent/HomeScreen";
import Redeem from "../screens/Main/Redeem";
import { RNCommonHeader, RNHeader, RNImage, RNStyles } from "../common";
import { Images } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cart from "../screens/Ecommerce/Cart";

const Stack = createStackNavigator();

const Routes = () => {
  const [isAuth, setAuth] = useState(true);
  useCustomFonts();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <>
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true,header: () => <RNCommonHeader title={"Cart"} />}} />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: true,
                header: () => (
                  <RNHeader
                    LeftIcon={require("../assets/images/menu.png")}
                    leftIconStyle={{
                      width: wp(4),
                      height: wp(4),
                    }}
                    centerImage={Images.Weoneprime}
                    centerImageStyle={{
                      width: wp(50),
                      height: hp(2),
                      position: "absolute",
                      bottom: hp(2),
                      left: wp(25),
                    }}
                    RightIcon={[
                      require("../assets/images/like.png"),
                      require("../assets/images/user.png"),
                      require("../assets/images/cart.png"),
                    ]}
                    rightIconStyle={{
                      width: wp(5),
                      height: wp(5),
                    }}
                    containerStyle={{
                      paddingLeft: wp(0),
                      backgroundColor: "#F0F0F0",
                      borderBottomWidth: 0,
                    }}
                    onRightPress={() => {
                      console.log("pressed!");
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen name="Redeem" component={Redeem} />
            <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            <Stack.Screen name="OfferDetails" component={OfferDetails} />
            <Stack.Screen name="Tab" component={TabBar} />
            <Stack.Screen name="Fevorite" component={Fevorite} />
            <Stack.Screen name="Amenity" component={Amenities} />
          </>
        ) : (
          <Stack.Screen name="Auth">
            {(props) => <AuthNavigation {...props} setAuth={setAuth} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
