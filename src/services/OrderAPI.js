import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrderAPI = createApi({
  reducerPath: "OrderAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    addNewOrder: builder.mutation({
      query: (body) => {
        return {
          url: "/order/add",
          method: "PUT",
          body,
        };
      },
    }),

    getNewestOrder: builder.query({
      query: () => "/order/newest",
    }),
  }),
});

export const { useAddNewOrderMutation, useLazyGetNewestOrderQuery } = OrderAPI;
