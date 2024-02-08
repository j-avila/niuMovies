import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFavoriteMovie = () => {
  const [favoriteMovie, setFavoriteMovie] = useState(null);

  useEffect(() => {
    // Load the favorite movie from local storage on component mount
    loadFavoriteMovie();
  }, []);

  const loadFavoriteMovie = async () => {
    try {
      const storedMovie = await AsyncStorage.getItem('favoriteMovie');
      if (storedMovie) {
        setFavoriteMovie(JSON.parse(storedMovie));
      }
    } catch (error) {
      console.error('Error loading favorite movie:', error);
    }
  };

  const saveFavoriteMovie = async movie => {
    try {
      await AsyncStorage.setItem('favoriteMovie', JSON.stringify(movie));
      setFavoriteMovie(movie);
    } catch (error) {
      console.error('Error saving favorite movie:', error);
    }
  };

  return [favoriteMovie, saveFavoriteMovie];
};

export default useFavoriteMovie;
