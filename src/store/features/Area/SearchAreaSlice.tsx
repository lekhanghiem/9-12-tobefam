// features/searchSlice.js
import { SearchArea } from '@/store/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  data: [],
  loading: false,
  error: null,
};
interface SearchPayload {
  category: string;
  search: string;
  page: number;
}

export const searchArea = createAsyncThunk(
  'search/searchArea',
  async ({ category, search, page }: SearchPayload, { rejectWithValue }) => {
    try {
      const res = await SearchArea.doSearchArea({ category, search }, page);

      if (res.status === 200) {
        return res.data.data; // Return the retrieved data
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return rejectWithValue(message); // Return error to update the state
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchArea.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchArea.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchArea.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default searchSlice.reducer;