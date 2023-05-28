import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const herosApi = createApi({
  reducerPath: 'herosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://js-ninja-back.onrender.com/api',
  }),
  tagTypes: ['Hero'],
  endpoints: builder => ({
    getAllHeros: builder.query({
      query: ({page ,limit}) => `/heros?page=${page}&limit=${limit}`,
      providesTags: ['Hero'],
    }),
    getHeroById:  builder.query({
        query: (heroId) => `/heros/${heroId}`,
        providesTags: ['Hero'],
      }),
    deleteHero: builder.mutation({
      query: (heroId) => ({
        url: `/heros/${heroId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Hero'],
    }),
    createHero: builder.mutation({
      query: (data) => ({
        url: `/heros`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Hero'],
    }),
    updateHero: builder.mutation({
        query: ({heroID,data}) => ({
            url: `/heros/${heroID}`,
            method: 'PATCH',
            body:data,
          }),
          invalidatesTags: ['Hero'],
      }),
  }),
});

export const {
  useGetAllHerosQuery,
  useGetHeroByIdQuery,
  useDeleteHeroMutation,
  useCreateHeroMutation,
  useUpdateHeroMutation,
} = herosApi;