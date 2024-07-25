import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);

      if (index !== -1) {
        // Item already exists in the cart, update its quantity
        state.data[index].qty += 1;
      } else {
        // Item doesn't exist in the cart, add it with quantity 1
        state.data.push({ ...action.payload, qty: 1 });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
