import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthAPI } from "../services/AuthAPI";
import { CategoryAPI } from "../services/CategoryAPI";
import { ProductAPI } from "../services/ProductAPI";
import authSlice from "./slices/authSlice";
import modalSlice from "./slices/modalSlice";
import sidebarSlice from "./slices/sidebarSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  sidebar: sidebarSlice,
  modal: modalSlice,
  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [ProductAPI.reducerPath]: ProductAPI.reducer,
  [CategoryAPI.reducerPath]: CategoryAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthAPI.middleware).concat(ProductAPI.middleware).concat(CategoryAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
