import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import Index from "./BottomTabs";
import AuthNavigation from "./AuthNavigation"; 
import Amenities from "../screens/Main/HomeComponent/Amenities";
import { useCustomFonts } from "../theme";

const Stack = createStackNavigator();

const Routes = () => {
  const [isAuth, setAuth] = useState(false); 
  useCustomFonts();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <Stack.Screen name="Tab" component={Amenities} /> 
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
