import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const productIndex = state.data.findIndex(
      //   (item) => item.id === action.payload.id
      // );

      // if (productIndex >= 0) {
      //   state.data[productIndex] = { ...action.payload };
      // } else {
      //   state.data.push({ ...action.payload });
      // }
      state.data.push({ ...action.payload, qty: 1 });
    },
    updateCart: (state, action) => {
      state.data = action.payload;
    },
    updateCartProdutQty: (state, action) => {
      const productIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.data[productIndex].qty = action.payload.qty;
      }
    },
    removeCartProduct: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCartProduct, updateCart, updateCartProdutQty } =
  cartSlice.actions;

export default cartSlice.reducer;
