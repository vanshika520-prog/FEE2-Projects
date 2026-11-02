import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// save cart to localStorage every time it changes
store.subscribe(() => {
  const cartItems = store.getState().cart.items;
  localStorage.setItem("cart", JSON.stringify(cartItems));
});

export default store;