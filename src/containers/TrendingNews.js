import React from 'react';
import {View, StyleSheet} from 'react-native';
import News from 'screens/News';

function TrendingNews() {
  return (
    <View style={styles.container}>
      <News />
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
