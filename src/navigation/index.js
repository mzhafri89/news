import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrendingStack from 'navigation/stacks/trending';
import NewsStandStack from 'navigation/stacks/newsStand';
import CardsStack from 'navigation/stacks/cards';

const Tab = createBottomTabNavigator();

export default function Root() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'TrendingStack') {
            iconName = 'trending-up';
          } else if (route.name === 'NewsStandStack') {
            iconName = 'logo-hackernews';
          } else if (route.name === 'CardsStack') iconName = 'card';

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabelStyle: {fontWeight: 'bold'},
      })}>
      <Tab.Screen
        name="TrendingStack"
        component={TrendingStack}
        options={{
          title: 'Trending',
        }}
      />
      <Tab.Screen
        name="NewsStandStack"
        component={NewsStandStack}
        options={{
          title: 'News Stand',
        }}
      />
      <Tab.Screen
        name="CardsStack"
        component={CardsStack}
        options={{
          title: 'Cards',
        }}
      />
    </Tab.Navigator>
  );
}
