import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTrendingNews = createAsyncThunk(
  'trendingNews/fetchTrendingNews',
  async () => {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty',
    );
    return response.json();
  },
);

const newsSlice = createSlice({
  name: 'trendingNews',
  initialState: {
    trendingNews: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTrendingNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTrendingNews.fulfilled, (state, action) => {
      state.trendingNews = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTrendingNews.rejected, state => {
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
