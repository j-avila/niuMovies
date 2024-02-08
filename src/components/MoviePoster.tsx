import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const defImg = require('@assets/poster.jpg');

const MoviePoster = ({ source }) => {
  return (
    <Image
      source={{ uri: source } || defImg}
      resizeMode="cover"
      style={{ width: 72, height: 121 }}
    />
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: '100%',
  },
});
