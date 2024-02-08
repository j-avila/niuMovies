import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from '@env';

const url = YOUTUBE_API_URL;
const apiKey = YOUTUBE_API_KEY;

export const trailerSlice = createApi({
  reducerPath: 'trailer',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  }),
  endpoints: builder => ({
    getMovieTrailer: builder.query({
      query: query =>
        `/search?part=snippet&maxResults=10&q=${query} movie trailer&type=video&key=${apiKey}`,
      providesTags: ['Movies'],
      transformResponse: response => {
        return response.items[0].id.videoId;
      },
    }),
  }),
});

export const { useGetMovieTrailerQuery } = trailerSlice;
