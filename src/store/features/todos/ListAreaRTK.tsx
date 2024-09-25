import { Area } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ListAreaRTK = createApi({
  reducerPath: 'list',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://192.168.0.106:3002' }),
  endpoints: (builder) => ({
    ListArea: builder.query<Area, string>({
      query: (page) => `/area/list/${page}`,
    }),
  }),
})


export const { useListAreaQuery } = ListAreaRTK