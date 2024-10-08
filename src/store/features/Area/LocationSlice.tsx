// // src/store/features/locationSlice.ts
// import axiosIns from '@/store/api/axiosIns';
// import { Province } from '@/types/types';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// interface LocationState {
//   locations: Province[];
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }


// const initialState: LocationState = {
//   locations: [],
//   status: 'idle',
//   error: null,
// };

// // Thunk để gọi API lấy dữ liệu
// export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
//   const response = await axiosIns.get('/locations');
//   return response.data.data as Province[];
// });

// const locationSlice = createSlice({
//   name: 'locations',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLocations.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchLocations.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.locations = action.payload;
//       })
//       .addCase(fetchLocations.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message || 'Failed to fetch locations';
//       });
//   },
// });

// export default locationSlice.reducer;
