import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import HeadDetail from './components/HeadDetail';
import MovieDetails from './components/MovieDetails';
import Button from '../../components/Button';
import Logo from '@components/Logo';
import { useGetMovieDetailsQuery } from '../../redux/services/apiSlice';
import { useGetMovieTrailerQuery } from '../../redux/services/trailerSlice';

// assets
const defImg = require('@assets/poster.png');
const playBut = require('@assets/play_but.png');

type Props = {
  route: any;
  navigation: any;
};

const dataMock = {
  details: {
    Title: 'Star Wars: Episode V - The Empire Strikes Back',
    Year: '1980',
    Rated: 'PG',
    Released: '18 Jun 1980',
    Runtime: '124 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'Irvin Kershner',
    Writer: 'Leigh Brackett, Lawrence Kasdan, George Lucas',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher',
    Plot: 'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
    Language: 'English',
    Country: 'United States',
    Awards: 'Won 1 Oscar. 26 wins & 20 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.7/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '95%',
      },
      {
        Source: 'Metacritic',
        Value: '82/100',
      },
    ],
    Metascore: '82',
    imdbRating: '8.7',
    imdbVotes: '1,359,459',
    imdbID: 'tt0080684',
    Type: 'movie',
    DVD: '10 Apr 2015',
    BoxOffice: '$292,753,960',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
  },
};

// view

const Details = ({ route }: Props) => {
  const { id, title, poster } = route.params;
  const navigation = useNavigation();
  const [playerOn, setPlayerOn] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const { data, isLoading } = useGetMovieDetailsQuery(id);
  const { data: trailer } = useGetMovieTrailerQuery(title);

  const themeStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  const handlePlayerLayout = () => {
    if (playerOn) {
      setPlayerOn(false);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={{ ...styles.sectionContainer, ...themeStyle }}>
      {playerOn ? (
        <View>
          <YoutubePlayer
            height={220}
            // play={playerOn}
            videoId={trailer}
            webViewProps={{
              containerStyle: {
                position: 'relative',
                zIndex: -1,
              },
            }}
            onChangeState={e => {
              console.log(e);
            }}
          />
        </View>
      ) : (
        <>
          <Logo />

          <Button action={() => setPlayerOn(!playerOn)}>
            <Image
              source={playBut}
              style={{
                alignSelf: 'center',
                marginVertical: 20,
                width: '100%',
                height: 80,
                opacity: 0.8,
              }}
              resizeMode="center"
            />
          </Button>

          <Image
            source={{ uri: poster } || defImg}
            style={styles.imagePoster}
          />
        </>
      )}

      {/* INFO */}
      <View style={{ ...styles.infoContainer, flex: playerOn ? 2 : 0 }}>
        <HeadDetail
          title={title}
          data={dataMock.details}
          state={playerOn}
          themeSwitch={handlePlayerLayout}
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <MovieDetails data={data} state={playerOn} />
        )}
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
  imagePoster: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: -1,
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
  content: {
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default Details;
