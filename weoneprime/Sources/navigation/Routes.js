import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./BottomTabs";
import AuthNavigation from "./AuthNavigation";

import { useCustomFonts } from "../theme";
import { Amenities, Fevorite, OfferDetails } from "../screens/Main";
import TabBar from "./BottomTabs";
import CategoryDetails from "../screens/Main/CategoryDetails";
import HomeScreen from "../screens/Ecommerce/HomeComponent/HomeScreen";
import Redeem from "../screens/Main/Redeem";

const Stack = createStackNavigator();

const Routes = () => {
  const [isAuth, setAuth] = useState(true);
  useCustomFonts();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
