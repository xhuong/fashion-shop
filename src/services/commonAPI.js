import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CommonAPI = createApi({
  reducerPath: "CommonAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllTableName: builder.query({
      query: () => "/apps/get-all-table-name",
    }),
  }),
});

export const { useGetAllTableNameQuery } = CommonAPI;
