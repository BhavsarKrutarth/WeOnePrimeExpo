import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen, LoginScreen, ImageCarousel } from "../screens/Auth";

const Stack = createStackNavigator();

const AuthNavigation = ({ setAuth }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Carousel"} component={ImageCarousel} />
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setAuth={setAuth} />} 
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
