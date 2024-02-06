import {} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TasksList from '../components/TasksList';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>hello tasks</Text>
        <TasksList />

        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
            navigation.navigate('Test');
          }}
        >
          <Text>Press me 🔥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
});

export default Home;
