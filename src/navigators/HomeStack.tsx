import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// views
import Home from '../pages/Home';

const TestComp = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={TestComp} />
    </Stack.Navigator>
  );
};

export default HomeStack;
