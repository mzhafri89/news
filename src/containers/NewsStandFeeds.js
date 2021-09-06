import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from '../store/reducers/news';
import Feeds from 'screens/Feeds';

function NewsStandFeeds({navigation}) {
  const dispatch = useDispatch();
  const {news, loading} = useSelector(state => state.news);

  const navigateToFeedDetailsScreen = useCallback(
    feedDetail => {
      navigation.navigate('TrendingNews', {feedDetail});
    },
    [navigation],
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Feeds
        items={news}
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

export default NewsStandFeeds;
