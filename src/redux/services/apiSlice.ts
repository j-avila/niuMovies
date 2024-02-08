import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOVIES_API_URL } from '@env';

const url = MOVIES_API_URL;

//TODO: add an chagpt service whos recomends a movie or series randomly
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getMovies: builder.query({
      query: query => `?apikey=b0b1dd61&type=movie&s=${query}`,
      providesTags: ['Movies'],
    }),
    getMovieDetails: builder.query({
      query: id => `?apikey=b0b1dd61&i=${id}`,
      providesTags: ['Movies'],
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = apiSlice;
