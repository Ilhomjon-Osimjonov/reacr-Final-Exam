import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlace";
import favoriteReducer from "./favoriteSlace";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  // devTools: true // optional, bu holda ham ishlaydi
});
