import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty',
  );
  return response.json();
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchNews.rejected, state => {
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
