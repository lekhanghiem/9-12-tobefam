import { EditArea } from "@/store/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const actionEditArea = createAsyncThunk(
  "edit/change",
  async ({ id, data }: { id: string; data: FormData }, { rejectWithValue }) => {
    try {
      const res = await EditArea.doEditArea({ id, data });
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


// Edit Area Slice
const EditAreaSlice = createSlice({
  name: "edit",
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
      .addCase(actionEditArea.pending, (state) => {
        state.edit.loading = true;
        state.edit.error = "";
      })
      // Rejected case
      .addCase(actionEditArea.rejected, (state, action) => {
        state.edit.loading = false;
        state.edit.error = action.payload as string; // Store the error message
      })
      // Fulfilled case
      .addCase(actionEditArea.fulfilled, (state, action) => {
        state.edit.loading = false;
        state.edit.data = action.payload; // Update the status with the returned data
        state.edit.error = ""; // Clear the error
      });
  },
});

export default EditAreaSlice.reducer;
