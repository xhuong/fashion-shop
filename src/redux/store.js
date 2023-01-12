import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthAPI } from "../services/AuthAPI";
import { CategoryAPI } from "../services/CategoryAPI";
import { ProductAPI } from "../services/ProductAPI";
import authSlice from "./slices/authSlice";
import modalSlice from "./slices/modalSlice";
import sidebarSlice from "./slices/sidebarSlice";
import cartSlice from "./slices/cartSlice";
import { OrderAPI } from "../services/OrderAPI";
import { OrderDetailsAPI } from "../services/OrderDetailsAPI";
import { CommonAPI } from "../services/commonAPI";

const rootReducer = combineReducers({
  auth: authSlice,
  sidebar: sidebarSlice,
  modal: modalSlice,
  cart: cartSlice,

  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [ProductAPI.reducerPath]: ProductAPI.reducer,
  [CategoryAPI.reducerPath]: CategoryAPI.reducer,
  [OrderAPI.reducerPath]: OrderAPI.reducer,
  [OrderDetailsAPI.reducerPath]: OrderDetailsAPI.reducer,
  [CommonAPI.reducerPath]: CommonAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthAPI.middleware)
      .concat(ProductAPI.middleware)
      .concat(CategoryAPI.middleware)
      .concat(OrderAPI.middleware)
      .concat(OrderDetailsAPI.middleware)
      .concat(CommonAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
