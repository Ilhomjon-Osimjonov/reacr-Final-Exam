import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [], // Sevimli mahsulotlar
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        state.items = state.items.filter((i) => i.id !== item.id); // O‘chirish
      } else {
        state.items.push(item); // Qo‘shish
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;