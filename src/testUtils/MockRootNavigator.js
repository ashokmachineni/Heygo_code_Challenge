import React from 'react';
import {SEARCH_SCREEN, MAP_SCREEN} from '../navigator/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MockRootNavigator = ({component}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={SEARCH_SCREEN}>{props => component}</Stack.Screen>
        <Stack.Screen name={MAP_SCREEN}>{props => component}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockRootNavigator;
