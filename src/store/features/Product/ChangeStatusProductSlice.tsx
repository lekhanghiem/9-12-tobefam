import { ChangeStatusProduct } from "@/store/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
interface ChangeStatusProductSlice {
  loading: boolean;
  data: any; // Define a specific type based on your API response
  error: string;
}
// Thunk for changing status
export const actionChangeStatusProduct = createAsyncThunk(
  "status/change",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await ChangeStatusProduct.doChangeStatusProduct(id);
        toast.success(res.data.message);
        return res.data;
    } catch (error: any) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const ChangeStatusProductSlice = createSlice({
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
      .addCase(actionChangeStatusProduct.pending, (state) => {
        state.status.loading = true;
        state.status.error = ""; // Clear previous error
      })
      // Rejected case
      .addCase(actionChangeStatusProduct.rejected, (state, action) => {
        state.status.loading = false;
        state.status.error = action.payload as string; // Store the error message
      })
      .addCase(actionChangeStatusProduct.fulfilled, (state, action) => {
        state.status.loading = false;
        state.status.error = "";
      });
  },
});

export default ChangeStatusProductSlice.reducer;
