import {} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import Logo from '@components/Logo';
import Button from '@components/Button';

const defImg = require('@assets/poster.png');

const Home = () => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';

  const themeStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

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
            placeholder="Search for a movie"
            placeholderTextColor="#87888a"
          />
        </View>
        <View style={styles.info}>
          <Text style={{ ...styles.sectionTitle, color: 'white' }}>
            Some example
          </Text>
          <Button
            action={() => navigation.navigate('Details', {})}
            color="tomato"
          >
            <Text
              style={{
                ...styles.highlight,
                color: 'white',
              }}
            >
              See trailer and details
            </Text>
          </Button>
        </View>
      </View>
      <Image source={defImg} style={styles.imagePoster} />
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
