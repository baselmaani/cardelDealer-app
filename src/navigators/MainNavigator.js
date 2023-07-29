import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '../pages/Auth/Login';
import BrandAndModel from '../pages/BrandAndModel/BrandAndModel';
import AddDevice from '../pages/device/AddDevice';
import Home from '../pages/Home';
import GetDevices from '../pages/device/GetDevices';
import Root from '../Root';
import SingleDevice from '../pages/device/SingleDevice';

const RootNav = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootNav.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <RootNav.Screen name='Home' component={Home} />
      <RootNav.Screen name='Brand And Model' component={BrandAndModel} />

      <RootNav.Screen name='Add Device' component={AddDevice} />
      <RootNav.Screen name='Login' component={Login} />

      <RootNav.Screen name='Get Devices' component={GetDevices} />
      <RootNav.Screen name='Single Device' component={SingleDevice} />
    </RootNav.Navigator>
  );
};

export default MainNavigator;
