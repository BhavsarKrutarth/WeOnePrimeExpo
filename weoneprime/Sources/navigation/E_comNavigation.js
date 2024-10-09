import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Cart, HomeScreen } from "../screens/Ecommerce";

const Stack = createStackNavigator();

const E_comNavigation = ({ setAuth }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true, header: () => <RNCommonHeader title={"Cart"} /> }} />
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
    </Stack.Navigator>
  );
};

export default E_comNavigation;
