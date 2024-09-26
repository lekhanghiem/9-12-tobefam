// features/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const searchArea = createAsyncThunk(
  'search/searchArea',
  async (data:{category:number,search:string}, { rejectWithValue }) => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch('https://192.168.0.106:3002/search/area', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? token : '',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return rejectWithValue(await response.json());
    }

    return await response.json();
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
      area: {
        loading: false,
        data: [],
        error: "",
      },
    },
  reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(searchArea.pending, (state: any) => {
          state.login.loading = true;
        })
        .addCase(searchArea.rejected, (state: any, action: any) => {
          state.login.loading = false;
          state.login.error = action.payload;
          state.login.data = {};
        })
        .addCase(searchArea.fulfilled, (state: any, action: any) => {
          state.login.loading = false;
          state.login.data = action.payload;
          state.login.error = "";
        });
    },
});

export default searchSlice.reducer;