import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCreditCards = createAsyncThunk(
  'cards/fetchCreditCards',
  async () => {
    const response = await fetch(
      'https://api.stripe.com/v1/customers/cus_K94gx7IB6UcJLB/sources',
      {
        headers: {
          Authorization:
            'Bearer sk_test_51JUm5GEV8wtBYZgiCVBEDRysgy1U3GngTMKppIOxr4uCRIdDi0VFt9demarPgNJF4kVjKaMLphvIkaRB6QFhG8RT00zwNrUs4N',
        },
      },
    );
    return response.json();
  },
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCreditCards.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCreditCards.fulfilled, (state, action) => {
      state.cards = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchCreditCards.rejected, state => {
      console.log('rejected');
      state.loading = false;
    });
  },
});

export default cardsSlice.reducer;
