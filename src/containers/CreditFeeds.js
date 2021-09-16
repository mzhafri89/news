import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCreditCards} from '../store/reducers/cards';
import PaymentCard from '../components/PaymentCard';

function CreditFeeds() {
  const dispatch = useDispatch();
  const {cards, loading} = useSelector(state => state.cards);

  useEffect(() => {
    dispatch(fetchCreditCards());
  }, [dispatch]);

  const renderItem = useCallback(
    ({item}) => (
      <PaymentCard
        brand={item.brand}
        expiryMonth={item.exp_month}
        expiryYear={item.exp_year}
        postfix={item.last4}
      />
    ),
    [],
  );

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={cards}
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
  },
  flatList: {
    flexGrow: 1,
    width: '100%',
  },
  separator: {height: 20, backgroundColor: 'transparent'},
  flatListContentContainerStyle: {
    paddingHorizontal: 24,
  },
});

export default CreditFeeds;
