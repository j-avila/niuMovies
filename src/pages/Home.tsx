import {} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TasksList from '../components/TasksList';
import { useNavigation } from '@react-navigation/native';
import MoviePoster from '../components/MoviePoster';

const defImg =
  'https://video-smo.geodata.gov.hk/AVideo/view/img/notfound_portrait.jpg';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.sectionContainer}>
      <Image source={{ uri: defImg }} style={styles.image} />
      <View style={styles.search}>
        <TextInput
          style={{ flex: 1, fontSize: 18 }}
          placeholder="Search for a movie"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
  image: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
});

export default Home;
