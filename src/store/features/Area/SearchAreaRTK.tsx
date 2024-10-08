import { Area,Search } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // Use '@reduxjs/toolkit/query/react' for React

const SearchArea = createApi({
  reducerPath: 'searchArea', // Provide a unique reducer path
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://192.168.0.106:3002/',
     prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken');

      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    searchArea: build.mutation<Area, Partial<Search>>({
      query: (post) => ({
        url: 'search/area',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});

export const {
  useSearchAreaMutation,
} = SearchArea;

export default SearchArea;
