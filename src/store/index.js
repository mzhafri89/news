import {configureStore} from '@reduxjs/toolkit';
import newsReducer from 'slices/news';
import trendingNewsReducer from 'slices/trendingNews';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    trendingNews: trendingNewsReducer,
  },
});
