import {configureStore} from '@reduxjs/toolkit';
import messageReducer from 'slices/message';
import newsReducer from 'slices/news';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    news: newsReducer,
  },
});
