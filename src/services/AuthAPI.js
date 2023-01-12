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
    getUserById: builder.query({
      query: (userId) => `/users/getAUser/${userId}`,
    }),
    addNewUser: builder.mutation({
      query: (body) => {
        return {
          url: "/users",
          method: "PUT",
          body,
        };
      },
    }),
    deleteAUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/users/${userId}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useLazyGetUserByUserNameQuery,
  useAddNewUserMutation,
  useLazyGetUserByIdQuery,
  useDeleteAUserMutation,
} = AuthAPI;
