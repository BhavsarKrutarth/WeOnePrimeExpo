import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavRoutes from '../NavRoutes';
import { Home } from '../../screens/Main';
import TabContent from './TabContent';
import Explore from '../../screens/Main/Explore';
import Setting from '../../screens/Main/Setting';
import { RNHeader } from '../../common';
import { Images } from '../../constants';
import { wp } from '../../theme';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabContent {...props} />}
      initialRouteName='Home'
    >
      <Tab.Screen name={NavRoutes.EXPLORE} component={Explore} />
      <Tab.Screen name={NavRoutes.HOME} component={Home}
        options={{
          header: () =>
            <RNHeader
              LeftIcon={Images.Weoneprime}
              RightIcon={Images.profile}
              containerStyle={{ paddingLeft: wp(14) }}
              rightIconStyle={{ width: wp(8), height: wp(8) }}
              leftIconStyle={{ width: wp(30) }} />
        }} />
      <Tab.Screen name={NavRoutes.SETTING} component={Setting} />
    </Tab.Navigator>
  );
};

export default Index;
