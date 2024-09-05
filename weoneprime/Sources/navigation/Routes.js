import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Main";
import NavRoutes from "./NavRoutes";
import { RegisterScreen, LoginScreen } from "../screens/Auth";
import { useCustomFonts } from "../theme";

const Stack = createStackNavigator();

const Routes = () => {
  useCustomFonts();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={NavRoutes.REGISTER} component={RegisterScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen
          name={NavRoutes.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"Home"} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
