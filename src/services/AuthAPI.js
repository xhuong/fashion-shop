import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthAPI = createApi({
  reducerPath: "AuthAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
    }),
    getUserByUserName: builder.query({
      query: (userName) => `/users/${userName}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useLazyGetUserByUserNameQuery } = AuthAPI;
