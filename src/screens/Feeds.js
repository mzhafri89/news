import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Card, Colors} from 'react-native-ui-lib';

async function getFeedDetails(id) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    );
    if (response.status !== 200) {
      return null;
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}

function FeedsCard({item, onPress}) {
  const [feedDetail, setFeedDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCardPress = useCallback(
    () => onPress(feedDetail),
    [feedDetail, onPress],
  );

  useEffect(() => {
    async function loadDetails(id) {
      const request = await getFeedDetails(id);
      if (request) {
        setFeedDetails(request);
      }
      setIsLoading(false);
    }
    loadDetails(item);
  }, [item]);

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <Card
        key={item}
        row
        height={160}
        style={styles.card}
        useNative
        backgroundColor={Colors.white}>
        {isLoading ? (
          <View style={styles.cardLoader}>
            <ActivityIndicator />
          </View>
        ) : (
          <Card.Section
            content={[
              {text: `by ${feedDetail?.by ?? ''}`, text70: true, grey10: true},
              {
                text: feedDetail?.title ?? '',
                text80: true,
                grey10: true,
              },
              {text: feedDetail?.url ?? '', text90: true, grey50: true},
            ]}
            style={styles.cardSection}
          />
        )}
      </Card>
    </TouchableOpacity>
  );
}

function Feeds({items, isLoading, onPress}) {
  const renderItem = useCallback(
    ({item}) => <FeedsCard item={item} onPress={onPress} />,
    [onPress],
  );

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderSeparator}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContentContainerStyle}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  flatList: {
    flexGrow: 1,
    width: '100%',
  },
  flatListContentContainerStyle: {
    paddingHorizontal: 24,
  },
  separator: {height: 20, backgroundColor: 'transparent'},
  card: {marginLeft: 0, marginRight: 0},
  cardSection: {padding: 20, flex: 1},
  cardLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Feeds;
