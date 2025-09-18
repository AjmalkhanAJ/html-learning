import { createSlice } from "@reduxjs/toolkit";

const loadOrders = () => {
  const data = localStorage.getItem("orders");
  return data ? JSON.parse(data) : [];
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: { list: loadOrders() },
  reducers: {
    addOrder: (state, action) => {
      const newOrder = action.payload;
      state.list.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(state.list));
    }
  }
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
