import { CreateFarm } from "@/store/api";
import { FormCreateFarm } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const actionCreateFarm = createAsyncThunk(
  "CreateFarm",
  async (  data: FormCreateFarm  , { rejectWithValue }) => {
    try {
      const res = await CreateFarm.doCreateFarm( data );
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
const CreateFarmSlice = createSlice({
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
      .addCase(actionCreateFarm.pending, (state) => {
        state.edit.loading = true;
        state.edit.error = "";
      })
      // Rejected case
      .addCase(actionCreateFarm.rejected, (state, action) => {
        state.edit.loading = false;
        state.edit.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionCreateFarm.fulfilled, (state, action) => {
        state.edit.loading = false;
        state.edit.data = action.payload;
        state.edit.error = "";
      });
  },
});

export default CreateFarmSlice.reducer;
