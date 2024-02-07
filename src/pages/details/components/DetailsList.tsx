import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Movie = {
  [key: string]: any;
};

const DetailsList = ({ data }: { data: Movie }) => {
  const keys = Object.keys(data);
  const filter = ['Poster', 'Ratings', 'Response', 'Plot'];
  const propKeys = keys.filter(key => (!filter.includes(key) ? data[key] : ''));

  return (
    <View>
      {propKeys.map((prop, index) => {
        const value = data[prop];

        return (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{prop} :</Text>
            <Text style={{ color: Colors.light }}>{` ${value}`}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default DetailsList;
