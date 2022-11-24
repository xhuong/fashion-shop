import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isActive: false,
    heading: "",
  },
  reducers: {
    openSidebar: (state, action) => {
      state.isActive = true;
      state.heading = action.payload;
    },
    closeSidebar: (state) => {
      state.isActive = false;

      // delay remove heading sidebar
      setTimeout(() => {
        state.heading = "";
      }, 700);
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
