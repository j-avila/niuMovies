import React from 'react';
import { TouchableOpacity, Image, Text, Share, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
const shareBut = require('@assets/share.png');

const ShareWidget = ({ url }: { url: string }) => {
  const onShare = async (urlLink: string) => {
    try {
      const result = await Share.share({
        message: 'Hello, you must see this movie!',
        url: urlLink,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        return;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Button action={() => onShare(url)} color="transparent">
      <Image
        source={shareBut}
        style={{ width: 20, height: 20, marginHorizontal: 8 }}
        resizeMode="center"
      />
      <Text style={{ ...styles.sectionTitle, color: 'white' }}>
        Share is love
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
});

export default ShareWidget;
