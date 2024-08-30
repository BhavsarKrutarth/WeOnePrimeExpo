import React from "react";
import { NavConfigs, NavRoutes } from "./index";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen, LoginScreen } from "../screens/Auth";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={NavConfigs.screenOptions}>

      <Stack.Screen
        name={NavRoutes.REGISTER}
        component={RegisterScreen}
      />


      <Stack.Screen name={NavRoutes.LOGIN} component={LoginScreen} />
     

    </Stack.Navigator>
  );
};

export default AuthNavigation;
