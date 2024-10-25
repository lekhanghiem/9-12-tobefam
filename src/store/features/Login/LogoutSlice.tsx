import { Logout } from "@/store/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const actionLogout = createAsyncThunk(
  "password",
  async (    ) => {
    try {
      const res = await Logout.doLogout();
      if (res.status === 200) {

        toast.success(res.data.message);
        return res.data;
      }
    } catch (error: any) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);

    }
  }
);
const LogoutSlice = createSlice({
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
      .addCase(actionLogout.pending, (state) => {
        state.edit.loading = true;
        state.edit.error = "";
      })
      // Rejected case
      .addCase(actionLogout.rejected, (state, action) => {
        state.edit.loading = false;
        state.edit.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionLogout.fulfilled, (state, action) => {
        state.edit.loading = false;
        state.edit.data = action.payload;
        state.edit.error = "";
      });
  },
});

export default LogoutSlice.reducer;
