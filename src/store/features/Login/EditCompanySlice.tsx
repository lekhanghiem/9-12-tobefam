import { EditCompany } from "@/store/api";
import { FormEditCompany } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const actionEditCompany = createAsyncThunk(
  "password",
  async (  data: FormEditCompany  , { rejectWithValue }) => {
    try {
      const res = await EditCompany.doEditCompany(data);
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
const EditCompanySlice = createSlice({
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
      .addCase(actionEditCompany.pending, (state) => {
        state.edit.loading = true;
        state.edit.error = "";
      })
      // Rejected case
      .addCase(actionEditCompany.rejected, (state, action) => {
        state.edit.loading = false;
        state.edit.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionEditCompany.fulfilled, (state, action) => {
        state.edit.loading = false;
        state.edit.data = action.payload;
        state.edit.error = "";
      });
  },
});

export default EditCompanySlice.reducer;
