import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://6672bdd26ca902ae11b1951a.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    getComments: builder.query({ query: () => API_ENDPOINT }),
    addComment: builder.mutation({
      query: newComment => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: newComment,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentApi;
