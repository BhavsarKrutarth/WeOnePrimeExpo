import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavRoutes from "./NavRoutes";
import { LoginScreen, RegisterScreen } from "../screens/Auth";
import { Home } from "../screens/Main";
import { RNHeader } from "../common";
import { Images } from "../constants";
import { wp } from "../theme";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={NavRoutes.REGISTER} component={RegisterScreen} options={{ header: () => <RNHeader LeftIcon={Images.Back} title={"Register"} /> }} /> */}
        <Stack.Screen
          name={NavRoutes.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavRoutes.HOME}
          component={Home}
          options={{ 
            header: () => 
            <RNHeader 
              LeftIcon={Images.Weoneprime} 
              RightIcon={Images.profile} 
              containerStyle={{ paddingLeft: wp(14) }} 
              rightIconStyle={{ width: wp(8), height: wp(8) }}
              leftIconStyle={{ width: wp(30) }} /> 
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
