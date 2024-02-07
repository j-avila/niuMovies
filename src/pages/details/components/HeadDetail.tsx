import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const downBut = require('@assets/chevron_down.png');
const bookmarkLines = require('@assets/bookmark_outline.png');

interface HeadDetailProps {
  data: {
    Title: string;
    imdbID: string;
  };
  themeSwitch: () => void;
  state: boolean;
}

const HeadDetail = ({ data, themeSwitch, state }: HeadDetailProps) => {
  return (
    <View style={styles.head}>
      <TouchableOpacity onPress={themeSwitch}>
        <Image
          source={downBut}
          style={{
            width: 20,
            height: 20,
            zIndex: 1,
            transform: [{ rotate: state ? '0deg' : '90deg' }],
          }}
          resizeMode="center"
        />
      </TouchableOpacity>
      <Text
        style={{
          ...styles.sectionTitle,
          color: 'white',
          flex: 1,
          textAlign: 'center',
        }}
      >
        {data.Title}
      </Text>
      <TouchableOpacity onPress={() => console.log(data.imdbID)}>
        <Image
          source={bookmarkLines}
          style={{
            width: 30,
            height: 30,
            zIndex: 1,
          }}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});

export default HeadDetail;
