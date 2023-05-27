import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const herosApi = createApi({
  reducerPath: 'herosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://js-ninja-back.onrender.com/api',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllHeros: builder.query({
      query: () => `/heros`,
      providesTags: ['Hero'],
    }),
    getHeroById:  builder.query({
        query: (heroID) => `/heros/${heroID}`,
        providesTags: ['Hero'],
      }),
    deleteHero: builder.mutation({
      query: heroID => ({
        url: `/heros/${heroID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Hero'],
    }),
    createHero: builder.mutation({
      query: ({ name, numder }) => ({
        url: `/heros`,
        method: 'POST',
        body: {
          name: name,
          phone: numder,
        },
      }),
      invalidatesTags: ['Hero'],
    }),
    updateHero: builder.mutation({
        query: (heroID,{name , numder}) => ({
            url: `/heros/${heroID}`,
            method: 'PATCH',
            body: {
                name: name,
                phone: numder,
              },
          }),
          invalidatesTags: ['Contact'],
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