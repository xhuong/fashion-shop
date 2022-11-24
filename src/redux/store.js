import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import sidebarSlice from "./slices/sidebarSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarSlice,
    modal: modalSlice,
  },
});
