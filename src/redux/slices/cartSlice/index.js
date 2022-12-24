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
        console.log("running logic when existed....");

        const finalResult = newCart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              count: cartItem.count + action.payload.count,
            };
          } else {
            return {
              ...cartItem,
            };
          }
        });

        return {
          ...state,
          cart: [...finalResult],
        };
      }
      // case 2: if product has added not existed from cart state
      else {
        console.log("running logic when not existed....");
        // console.log("payload", action.payload);

        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    },
    removeProductsFromCart: (state, action) => {
      console.log("id...", action.payload);
      if (state.cart.length > 0) {
        const newCart = [...state.cart];
        const result = newCart.filter((cartItem) => {
          return cartItem.id !== action.payload;
        });
        return {
          ...state,
          cart: [...result],
        };
      }
    },
    removeAllProductsFromCart: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
    removeAllProductsFromWishList: (state) => {
      return {
        ...state,
        wishlist: [],
      };
    },
    addProductsToWishList: (state, action) => {
      const newWishList = [...state.wishlist];

      // check existed

      const isExisted = newWishList.some((wishItem) => {
        if (wishItem.id === action.payload.id) {
          return true;
        }
        return false;
      });

      console.log("isExisted", isExisted);

      // case 1: if product has added existed from cart state
      if (isExisted) {
        // console.log("running logic when existed....");
        const finalResult = newWishList.map((wishItem) => {
          if (wishItem.id === action.payload.id) {
            return {
              ...wishItem,
              count: wishItem.count + 1,
              price: wishItem.price * (wishItem.count + 1),
            };
          } else {
            return {
              ...wishItem,
            };
          }
        });

        return {
          ...state,
          wishlist: [...finalResult],
        };
      } else {
        console.log("running logic when not existed....");
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }
    },
    removeProductsFromWishList: (state, action) => {
      if (state.wishlist.length > 0) {
        const newWishList = [...state.wishlist];
        const result = newWishList.filter((wishListItem) => {
          return wishListItem.id !== action.payload;
        });
        return {
          ...state,
          wishlist: [...result],
        };
      }
    },
  },
});

export const {
  addProductsToCart,
  removeProductsFromCart,
  addProductsToWishList,
  removeProductsFromWishList,
  removeAllProductsFromWishList,
  removeAllProductsFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
