import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrendingFeeds from 'containers/TrendingFeeds';
import TrendingNews from 'containers/TrendingNews';

const Stack = createNativeStackNavigator();

export default function Trending() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrendingFeeds" component={TrendingFeeds} />
      <Stack.Screen name="TrendingNews" component={TrendingNews} />
    </Stack.Navigator>
  );
}
