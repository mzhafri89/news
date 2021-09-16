import {configureStore} from '@reduxjs/toolkit';
import newsReducer from 'slices/news';
import trendingNewsReducer from 'slices/trendingNews';
import cardsReducer from 'slices/cards';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    trendingNews: trendingNewsReducer,
    cards: cardsReducer,
  },
});
