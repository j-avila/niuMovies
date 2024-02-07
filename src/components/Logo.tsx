import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const logo = require('@assets/logo.png');

const Logo = () => {
  return (
    <View>
      <Image source={logo} style={styles.logo} resizeMode="center" />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
