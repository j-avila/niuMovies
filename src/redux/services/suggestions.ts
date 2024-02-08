import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from '@env';

const url = YOUTUBE_API_URL;
const apiKey = YOUTUBE_API_KEY;

export const suggestionSlice = createApi({
  reducerPath: 'trailer',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  }),
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getMovieTrailer: builder.query({
      query: query => query,
      providesTags: ['Movies'],
      transformResponse: response => {
        return response;
      },
    }),
  }),
});

export const { useGetMovieTrailerQuery } = suggestionSlice;
