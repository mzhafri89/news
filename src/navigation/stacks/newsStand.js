import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsStandFeeds from 'containers/NewsStandFeeds';
import NewsStandNews from 'containers/NewsStandNews';

const Stack = createNativeStackNavigator();

export default function NewsStand() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsStandFeeds" component={NewsStandFeeds} />
      <Stack.Screen name="NewsStandNews" component={NewsStandNews} />
    </Stack.Navigator>
  );
}
