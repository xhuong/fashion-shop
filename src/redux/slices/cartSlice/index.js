import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    wishlist: [],
  },
  reducers: {
    addProductsToCart: (state, action) => {
      const newCart = [...state.cart];

      // check existed

      const isExisted = newCart.some((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return true;
        }
        return false;
      });

      console.log("isExisted", isExisted);

      // case 1: if product has added existed from cart state
      if (isExisted) {
        // console.log("running logic when existed....");
        const finalResult = newCart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              count: cartItem.count + 1,
            };
          } else {
            return {
              ...cartItem,
            };
          }
        });

        // console.log("ddd...", d);

        return {
          ...state,
          cart: [...finalResult],
        };
      } else {
        console.log("running logic when not existed....");
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    },
    removeProductsFromCard: (state, action) => {
      if (state.cart.length > 0) {
        const newCart = [...state.cart];
        const result = newCart.filter((cartItem) => {
          return cartItem.id !== action.payload.id;
        });
        return {
          ...state,
          cart: [...result],
        };
      }
    },
    addProductsToWishList: (state, action) => {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    },
    removeProductsFromWishList: (state, action) => {
      if (state.wishlist.length > 0) {
        const newWishList = [...state.wishlist];
        const result = newWishList.filter((wishListItem) => {
          return wishListItem.id !== action.payload.id;
        });
        return {
          ...state,
          wishlist: [...result],
        };
      }
    },
  },
});

export const { addProductsToCart, removeProductsFromCard, addProductsToWishList, removeProductsFromWishList } =
  cartSlice.actions;

export default cartSlice.reducer;
