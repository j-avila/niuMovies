import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// views
import Home from '../pages/Home';

// types
// import { Movie } from '../interfaces/MoviesDB';
// export type RootStackParams = {
//   Home: undefined;
//   Detail: Movie;
//   Movie: {
//     name: string;
//     id: string;
//   };
// };

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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Test" component={TestComp} />
    </Stack.Navigator>
  );
};

export default HomeStack;
