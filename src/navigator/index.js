import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MAP_SCREEN, SEARCH_SCREEN} from './routes';
import {MapScreen, Search} from '../screens';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SEARCH_SCREEN}
          component={Search}
          options={{title: 'SEARCH'}}
        />
        <Stack.Screen
          name={MAP_SCREEN}
          component={MapScreen}
          options={{title: 'VIEW LOCATION'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
