import React, {useCallback} from 'react';
import News from 'screens/News';

function NewsStandNews({route, navigation}) {
  const navigateBackToFeedsScreen = useCallback(
    () => navigation.navigate('NewsStandFeeds'),
    [navigation],
  );

  return (
    <News
      uri={route.params.feedDetail.url}
      navigateBack={navigateBackToFeedsScreen}
    />
  );
}

export default NewsStandNews;
