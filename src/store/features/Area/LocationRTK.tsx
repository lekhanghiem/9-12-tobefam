import { City } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Location = createApi({
  reducerPath: 'location',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
   }),

  endpoints: (builder) => ({
    Location: builder.query<City[] , string>({
      query: (json) => ``,
    }),
  }),
})


export const { useLocationQuery } = Location