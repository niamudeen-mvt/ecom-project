import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isLoggedIn: localStorage.getItem("userId") ? true : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const { updateAuthStatus } = authSlice.actions;

export const useAuth = () => {
  return useSelector((state) => state.authUser);
};

export default authSlice.reducer;
