import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { MOVIES_API_URL } from '@env';
// const url = MOVIES_API_URL;

const url = 'http://192.168.1.85:3000';

//TODO: add an chagpt service whos recomends a movie or series randomly

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getMovies: builder.query({
      query: () => 'search',
      providesTags: ['Movies'],
    }),
    getMovieDetails: builder.query({
      query: id => `s=${id}`,
      providesTags: ['Movies'],
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = apiSlice;
