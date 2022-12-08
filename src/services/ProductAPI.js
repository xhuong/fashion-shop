import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductAPI = createApi({
  reducerPath: "ProductAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getNewestProducts: builder.query({
      query: () => "/products/newest",
    }),
    getProductsByFilter: builder.query({
      query: (body) =>
        `/products/filter?idCategory=${body.idCategory}&size=${body.size}&color=${body.color}&minPrice=${body.minPrice}&maxPrice=${body.maxPrice}`,
    }),
  }),
});

export const { useGetNewestProductsQuery, useLazyGetProductsByFilterQuery } = ProductAPI;
