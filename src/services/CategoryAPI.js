import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CategoryAPI = createApi({
  reducerPath: "CategoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getListCategories: builder.query({
      query: () => "/categories/list",
    }),
  }),
});

export const { useGetListCategoriesQuery } = CategoryAPI;
