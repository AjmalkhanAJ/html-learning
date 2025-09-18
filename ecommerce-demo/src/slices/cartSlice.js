import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },  // {id, title, price, qty}
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
