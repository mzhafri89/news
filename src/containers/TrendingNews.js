import React from 'react';
import {View, StyleSheet} from 'react-native';
import News from 'screens/News';

function TrendingNews({route}) {
  return (
    <View style={styles.container}>
      <News uri={route.params.feedDetail.url} />
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

export default TrendingNews;
