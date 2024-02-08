import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// views
import Home from '../pages/Home';
import Details from '../pages/details/Details';
import Favs from '../pages/Favs';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Favs" component={Favs} />
    </Stack.Navigator>
  );
};

export default HomeStack;
