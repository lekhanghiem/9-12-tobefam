import { Company } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const LocationCompany = createApi({
  reducerPath: 'LocationCompany',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://192.168.0.106:3002/locations',
   }),

  endpoints: (builder) => ({
    LocationCompany: builder.query<Company[] , string>({
      query: (json) => ``,
    }),
  }),
})


export const { useLocationCompanyQuery } = LocationCompany