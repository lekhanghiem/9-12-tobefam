// features/searchSlice.js
import { SearchArea } from '@/store/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const searchArea = createAsyncThunk(
  'search/searchArea',
  async (payload: { category: number; search: string }, { rejectWithValue }) => {
    const token = localStorage.getItem('accessToken');
    try {
      const res = await SearchArea.doSearchArea(payload);

      if (res.status === 200) {
        toast.success(res.data.message);
        return res.data.data; // Trả về dữ liệu sản phẩm
      }

    } catch (error: any) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return rejectWithValue(message); // Trả về lỗi để cập nhật state
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
        console.log(state.data);
      })
      .addCase(searchArea.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default searchSlice.reducer;