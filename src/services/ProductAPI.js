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
    getTrendingProducts: builder.query({
      query: () => "products/trending",
    }),
    getListProductsOrdered: builder.query({
      query: (body) => `/order/listProductOrdered?idUser=${body.idUser}`,
    }),
    getProductById: builder.query({
      query: (body) => `/products/?id=${body.id}`,
    }),
    findProductsByName: builder.query({
      query: (body) => `/products/find?idCategory=${body.idCategory}&keyword=${body.keyword}`,
    }),
  }),
});

export const {
  useGetNewestProductsQuery,
  useLazyGetProductsByFilterQuery,
  useGetTrendingProductsQuery,
  useLazyGetListProductsOrderedQuery,
  useLazyGetProductByIdQuery,
  useLazyFindProductsByNameQuery,
} = ProductAPI;
