import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feeds from 'screens/Feeds';

function TrendingFeeds() {
  return (
    <View style={styles.container}>
      <Feeds />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrendingFeeds;
