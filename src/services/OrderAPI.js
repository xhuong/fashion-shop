import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrderAPI = createApi({
  reducerPath: "OrderAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    addNewOrder: builder.mutation({
      query: (body) => {
        return {
          url: "/order/addNewOrder",
          method: "PUT",
          body,
        };
      },
    }),

    getNewestOrder: builder.query({
      query: () => "/order/getNewestOrder",
    }),
  }),
});

export const { useAddNewOrderMutation, useLazyGetNewestOrderQuery } = OrderAPI;
