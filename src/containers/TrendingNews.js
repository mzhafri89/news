import React, {useCallback} from 'react';
import News from 'screens/News';

function TrendingNews({route, navigation}) {
  const navigateBackToFeedsScreen = useCallback(
    () => navigation.navigate('TrendingFeeds'),
    [navigation],
  );

  return (
    <News
      uri={route.params.feedDetail.url}
      navigateBack={navigateBackToFeedsScreen}
    />
  );
}

export default TrendingNews;
