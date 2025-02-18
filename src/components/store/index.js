import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { toggleShoppingCart: false };

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    toggleShoppingCart(state) {
      state.toggleShoppingCart = !state.toggleShoppingCart;
    }
  }
});

const store = configureStore({
  reducer: storeSlice.reducer
});

export const storeActions = storeSlice.actions;

export default store;
