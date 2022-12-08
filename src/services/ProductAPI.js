import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductAPI = createApi({
  reducerPath: "ProductAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getNewestProducts: builder.query({
      query: () => "/products/newest",
    }),
  }),
});

export const { useGetNewestProductsQuery } = ProductAPI;
