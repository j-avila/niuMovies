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

const Home = () => {
  const [query, setQuery] = useState('');
  const { isLoading, data } = useGetMoviesQuery(query);
  const { movieSuggestion, error } = useMovieSuggestion();
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const themeStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  const defsug = {
    Title: 'Godfather',
    Year: '2022',
    Rated: 'TV-14',
    Released: '05 Oct 2022',
    Runtime: '157 min',
    Genre: 'Action, Crime, Drama',
    Director: 'Mohan Raja',
    Writer: 'Lakshmi Bhupala, Murali Gopy, Mohan Raja',
    Actors: 'Chiranjeevi, Salman Khan, Nayanthara',
    Plot: 'After the death of a political leader, a mysterious man steps in to ascend the throne.',
    Language: 'Tamil, Kannada, Malayalam, Telugu, Hindi',
    Country: 'India',
    Awards: '1 win & 2 nominations',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYmIxMjM2N2MtYjJiMC00NDNmLWExMDEtZjYyYjIyNjMzMDEwXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg',
    Ratings: [{ Source: 'Internet Movie Database', Value: '5.2/10' }],
    Metascore: 'N/A',
    imdbRating: '5.2',
    imdbVotes: '7,486',
    imdbID: 'tt13130308',
    Type: 'movie',
    DVD: 'N/A',
    BoxOffice: 'N/A',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  };

  useEffect(() => {
    console.log('🙏🏽', useMovieSuggestion);
    console.log('🙏🏽', error);
  }, [movieSuggestion, error]);

  return (
    <View style={{ ...styles.sectionContainer, ...themeStyle }}>
      <Logo />

      <View style={styles.infoContainer}>
        <View style={styles.search}>
          <TextInput
            style={{
              flex: 1,
              fontSize: 18,
              color: '#e8e9eb',
            }}
            onChangeText={setQuery}
            placeholder="Search for a movie"
            placeholderTextColor="#87888a"
            value={query}
          />
          <Button action={() => setQuery('')}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>
              x
            </Text>
          </Button>
        </View>
        <View style={{ padding: 20 }}>
          <Button color="tomato" action={() => navigation.navigate('Favs')}>
            <Text style={{ color: 'white' }}>Ver mis favoritos 🌟</Text>
          </Button>
        </View>
        {data?.Search && (
          <>
            <View style={styles.info}>
              <Text style={{ color: 'white' }}>Resultados</Text>
            </View>
            <CardList data={data?.Search} />
          </>
        )}
      </View>

      {/* BG poster */}
      <View style={styles.feat}>
        <View
          style={{
            zIndex: 1,
          }}
        >
          <Text
            style={{
              ...styles.sectionTitle,
              color: 'white',
              textAlign: 'center',
              fontSize: 34,
            }}
          >
            Busca tus peliculas favoritas
          </Text>
        </View>
        <Image
          source={{ uri: defsug.Poster } || defImg}
          style={styles.imagePoster}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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

export default Home;
