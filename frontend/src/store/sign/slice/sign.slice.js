import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = signSlice.actions;

export default signSlice;
