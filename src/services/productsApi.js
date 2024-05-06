import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_API_URL}` }),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => `products.json`,
      }),
      getSpecificProduct: builder.query({
        query: (id) => `products/${id}.json`,
      }),
    }),
  })

