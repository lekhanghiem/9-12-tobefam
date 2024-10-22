import { EditUser } from "@/store/api";
import { FormDataEditUser } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const actionEditUser = createAsyncThunk(
  "password",
  async (  data: FormDataEditUser  , { rejectWithValue }) => {
    try {
      const res = await EditUser.doEditUser(data);
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
const EditUserSlice = createSlice({
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
      .addCase(actionEditUser.pending, (state) => {
        state.edit.loading = true;
        state.edit.error = "";
      })
      // Rejected case
      .addCase(actionEditUser.rejected, (state, action) => {
        state.edit.loading = false;
        state.edit.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionEditUser.fulfilled, (state, action) => {
        state.edit.loading = false;
        state.edit.data = action.payload;
        state.edit.error = "";
      });
  },
});

export default EditUserSlice.reducer;
