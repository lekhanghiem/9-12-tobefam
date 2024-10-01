import { ChangeStatus } from "@/store/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
interface ChangeStatusSlice {
  loading: boolean;
  data: any; // Define a specific type based on your API response
  error: string;
}
// Thunk for changing status
export const actionChangeStatus = createAsyncThunk(
  "status/change",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await ChangeStatus.doChangeStatus(id);
      if (res.status === 200) {
        toast.success(res.data.message);
        return res.data; // Return the response data for the fulfilled case
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return rejectWithValue(message); // Return the error message
    }
  }
);

// Slice for status
const ChangeStatusSlice = createSlice({
  name: "status",
  initialState: {
    status: {
      loading: false,
      data: {},
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending case
      .addCase(actionChangeStatus.pending, (state) => {
        state.status.loading = true;
        state.status.error = ""; // Clear previous error
      })
      // Rejected case
      .addCase(actionChangeStatus.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionChangeStatus.fulfilled, (state, action) => {
        state.status.loading = false;
        state.status.data = action.payload; // Update the status with the returned data
        state.status.error = ""; // Clear the error
      });
  },
});

export default ChangeStatusSlice.reducer;
