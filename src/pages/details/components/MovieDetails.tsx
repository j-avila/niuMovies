import React from 'react';
import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native';
import DetailsList from './DetailsList';
import ShareWidget from './ShareWidget';
import Button from '../../../components/Button';

type MovieDetailsProps = {
  data: {
    Plot: string;
    Title: string;
    Website: string;
  };
  state: boolean;
};

const MovieDetails = ({ data, state }: MovieDetailsProps) => {
  const ticketsURL = (name: string) =>
    `https://www.google.com/search?q=${name}+tickets`;

  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={{ ...styles.sectionDescription, color: 'white' }}>
          {data.Plot}
        </Text>
        {/* detals  of the movie */}
        {state && (
          <View>
            <Text
              style={{
                ...styles.sectionTitle,
                color: '#d1d14f',
                marginVertical: 14,
                borderBottomColor: '#d1d14f',
                borderBottomWidth: 1,
              }}
            >
              More Details
            </Text>
            <DetailsList data={data} />
          </View>
        )}

        {/* CTA for search tickets */}
        <Button
          action={() => Linking.openURL(ticketsURL(data.Title))}
          color="#ACB723"
        >
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            watch at your nearest cinema 🍿
          </Text>
        </Button>
        <ShareWidget url={data.Website} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
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
});

export default MovieDetails;
