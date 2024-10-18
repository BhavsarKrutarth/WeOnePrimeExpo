import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./AuthNavigation";
import {
  Amenities,
  Fevorite,
  OfferDetails,
  Redeem,
  Saving,
} from "../screens/Main";
import TabBar from "./BottomTabs";
import CategoryDetails from "../screens/Main/CategoryDetails";
import { useDispatch, useSelector } from "react-redux";
import { Functions } from "../utils";
import { onAuthChange, setAsyncStorageValue } from "../redux/Reducers/AuthReducers";
import { useCustomFonts } from "../theme";

const Stack = createStackNavigator();

const Routes = () => {
  useCustomFonts();
  const { isAuth } = useSelector(({ Auth }) => Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const data = await Functions.getUserData();   
    if (data) {
      dispatch(onAuthChange(true));
      dispatch(setAsyncStorageValue(data));
    } else {
      dispatch(onAuthChange(false));
    }
  };
   

  return (
    <NavigationContainer>
      {isAuth ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={TabBar} />
          <Stack.Screen name="Saving" component={Saving} />
          <Stack.Screen name="Amenity" component={Amenities} />
          <Stack.Screen name="Redeem" component={Redeem} />
          <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
          <Stack.Screen name="OfferDetails" component={OfferDetails} />
          <Stack.Screen name="Fevorite" component={Fevorite} />
        </Stack.Navigator>
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default Routes;
