import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreditFeeds from 'containers/CreditFeeds';

const Stack = createNativeStackNavigator();

export default function Cards() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreditFeeds" component={CreditFeeds} />
    </Stack.Navigator>
  );
}
