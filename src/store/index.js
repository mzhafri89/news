import {configureStore} from '@reduxjs/toolkit';
import newsReducer from 'slices/news';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
