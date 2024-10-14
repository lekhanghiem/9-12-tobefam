import { SearchProduct } from '@/store/api';
import { Product } from '@/types/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Define the shape of the state
interface SearchState {
  loading: boolean;
  data: Product[];
  error: string | null;
  totalPages: number;
  category: number;
  search: string;
  page: number;
}

// Initial state of the search slice
const initialState: SearchState = {
  loading: false,
  data: [],
  error: null,
  totalPages: 1,
  category: 1,
  search: '',
  page: 1,
};

// Define the payload structure for search
interface SearchPayload {
  category: number;
  search: string;
  page: number;
}

// Async thunk to fetch search results
export const searchProduct = createAsyncThunk(
  'search/searchProduct',
  async ({ category, search, page }: SearchPayload, { rejectWithValue }) => {
    try {
      const res = await SearchProduct.doSearchProduct({ category, search }, page);
      return res.data;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || "Something went wrong.";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Slice
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
  setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || []; // Use areas if the API returns that
        state.totalPages = action.payload?.totalPages || 1;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Store the error message
      });
  },
});
export const { setCategory, setSearch, setPage } = searchSlice.actions;
export default searchSlice.reducer;
