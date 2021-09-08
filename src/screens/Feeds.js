import React, {useCallback} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import FeedsCard from '../components/FeedsCard';

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
