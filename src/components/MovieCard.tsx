import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MoviePoster from './MoviePoster';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import { Search } from '../types';

type Props = {
  width?: number;
  height?: number;
  data: Search;
};

export const MovieCard = ({ width, height, data }: Props) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate('Details', {
          title: data?.Title,
          id: data?.imdbID,
        });
      }}
      style={{ marginVertical: 6 }}
    >
      <View style={{ ...styles.card, width, height }}>
        <MoviePoster source={data?.Poster} />
        <View style={styles.info}>
          <Text style={styles.infoTitle}>{data?.Title || 'not aviable'}</Text>
          <Text style={{ color: '#CCCCCC' }}>
            {data?.Year || 'not aviable'}
          </Text>
          <Text style={{ color: '#CCCCCC' }}>
            {data?.Type || 'not aviable'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'flex-end',
          }}
        >
          <Button
            action={() => {
              console.log('🤌🏽');
            }}
          >
            <Image
              source={require('@assets/bookmark_outline.png')}
              style={{ width: 30, height: 30 }}
            />
          </Button>
          <Button>
            <Image
              source={require('@assets/info.png')}
              style={{ width: 30, height: 30 }}
            />
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CardList = ({ data }: any) => {
  return (
    <View style={{ paddingBottom: 300, maxHeight: 'auto' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <MovieCard data={item} />}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderRadius: 8,
    alignItems: 'center',
    gap: 12,
    padding: 16,
    justifyContent: 'flex-start',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  info: { flex: 2, padding: 12 },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#CCCCCC',
    textTransform: 'capitalize',
  },
});

export default CardList;
