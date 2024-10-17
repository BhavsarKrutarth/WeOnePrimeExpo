import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen, LoginScreen, ImageCarousel } from "../screens/Auth";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
