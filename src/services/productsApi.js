import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_API_URL}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products.json`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApiSlice