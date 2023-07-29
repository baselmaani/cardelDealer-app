import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigators/MainNavigator';

const Root = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Root;
