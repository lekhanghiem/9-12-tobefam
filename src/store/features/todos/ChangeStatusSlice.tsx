import { ChangeStatus } from "@/store/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const actionChangeStatus = createAsyncThunk(
  "status",
  async (id:string) => {
    try {

      const res = await ChangeStatus.doChangeStatus(id);
      if (res.status === 200) {

        toast.success(res.data.message);


      }
    } catch (error: any) {

      const message = error.response.data?.message || error.message;
      toast.error(message);
    }
  }
);

const { reducer, actions } = createSlice({
  name: "status",
  initialState: {
    status: {
      loading: false,
      data: [],
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionChangeStatus.pending, (state: any) => {
        state.status.loading = true;
      })
      .addCase(actionChangeStatus.rejected, (state: any, action: any) => {
        state.status.loading = false;
        state.status.error = action.payload;
        state.status.data = {};
      })
      .addCase(actionChangeStatus.fulfilled, (state: any, action: any) => {
        state.status.loading = false;
        state.status.data = action.payload;
        state.status.error = "";
      });
  },




});
export default reducer;
export { actionChangeStatus };