import { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Logo from '@components/Logo';
import CardList from '@components/MovieCard';

import { useGetMoviesQuery } from '../redux/services/apiSlice';
import Button from '../components/Button';
import useMovieSuggestion from '../hooks/Suggestions';
import { useNavigation } from '@react-navigation/native';
const defImg = require('@assets/poster.png');

const Favs = () => {
  const [query, setQuery] = useState('interstellar');
  const { isLoading, data } = useGetMoviesQuery(query);
  const { movieSuggestion, error } = useMovieSuggestion();
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const themeStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  useEffect(() => {
    console.log('🙏🏽', useMovieSuggestion);
    console.log('🙏🏽', error);
  }, [movieSuggestion, error]);

  return (
    <View style={{ ...styles.sectionContainer, ...themeStyle }}>
      <Logo />
      <Text style={{ fontSize: 40, textAlign: 'center' }}>Favourites</Text>
      <Button action={() => navigation.navigate('Home')}>
        <Text>Back to home</Text>
      </Button>
      <>
        {data?.Search && (
          <>
            <View style={styles.info}>
              <Text style={{ color: 'white' }}>Resultados</Text>
            </View>
            <CardList data={data?.Search} />
          </>
        )}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#171717',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  feat: {
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'absolute',
    zIndex: -1,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imagePoster: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'absolute',
    zIndex: -1,
    flex: 1,
    opacity: 0.2,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f2021',
    color: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    top: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  infoContainer: {
    backgroundColor: '#171717',
    paddingBottom: 40,
  },
  info: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  logo: {
    width: '100%',
    height: 80,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default Favs;
