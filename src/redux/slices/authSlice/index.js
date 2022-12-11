import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: true,
  },
  reducers: {
    setActiveAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    removeActiveAuthenticated: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setActiveAuthenticated, removeActiveAuthenticated } = authSlice.actions;

export default authSlice.reducer;
