import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: 'hiddenArticles',
  initialState,
  reducers: {
    hideArticles: (state, action) => {
      state.value.push(action.payload);
    },
    displayArticles: (state, action) => {
      state.value = [];
    },
  },
});

export const { hideArticles, displayArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;