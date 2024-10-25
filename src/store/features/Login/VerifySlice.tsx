import { Verify } from "@/store/api";
import { FormVerify } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const actionVerify = createAsyncThunk(
  "password",
  async (  data: FormVerify  , { rejectWithValue }) => {
    try {
      const res = await Verify.doVerify(data);
      if (res.status === 200) {
        toast.success(res.data.message);
        return res.data;
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);
const VerifySlice = createSlice({
  name: "change",
  initialState: {
    edit: {
      loading: false,
      data: {},
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionVerify.pending, (state) => {
        state.edit.loading = true;
        state.edit.error = "";
      })
      // Rejected case
      .addCase(actionVerify.rejected, (state, action) => {
        state.edit.loading = false;
        state.edit.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionVerify.fulfilled, (state, action) => {
        state.edit.loading = false;
        state.edit.data = action.payload;
        state.edit.error = "";
      });
  },
});

export default VerifySlice.reducer;
