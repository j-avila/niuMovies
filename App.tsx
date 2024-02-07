/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigators/HomeStack';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </>
  );
}

export default App;
