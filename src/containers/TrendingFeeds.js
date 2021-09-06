import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTrendingNews} from '../store/reducers/news';
import Feeds from 'screens/Feeds';

function TrendingFeeds({navigation}) {
  const dispatch = useDispatch();
  const {trendingNews, loading} = useSelector(state => state.news);

  const navigateToFeedDetailsScreen = useCallback(
    feedDetail => {
      navigation.navigate('TrendingNews', {feedDetail});
    },
    [navigation],
  );

  useEffect(() => {
    dispatch(fetchTrendingNews());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Feeds
        items={trendingNews}
        isLoading={loading}
        onPress={navigateToFeedDetailsScreen}
      />
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
