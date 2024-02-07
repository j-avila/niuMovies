import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = 'http://192.168.1.85:3000';

//TODO: add an chagpt service whos recomends a movie or series randomly

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  tagTypes: ['Tasks'],
  endpoints: builder => ({
    getTasks: builder.query({
      query: () => 'tasks',
      providesTags: ['Tasks'],
    }),
    updateTask: builder.mutation({
      query: payload => {
        return {
          url: `${url}/tasks/${payload.id}`,
          method: 'PATCH',
          body: { ...payload },
        };
      },
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const { useGetTasksQuery, useUpdateTaskMutation } = apiSlice;
