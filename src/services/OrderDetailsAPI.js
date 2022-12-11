import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrderDetailsAPI = createApi({
  reducerPath: "OrderDetailsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    addNewOrderDetails: builder.mutation({
      query: (body) => {
        return {
          url: "/order-details/addNewOrderDetails",
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

export const { useAddNewOrderDetailsMutation } = OrderDetailsAPI;
