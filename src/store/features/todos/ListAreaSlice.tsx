
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {  ListArea } from "../../api/index";
const actionListArea = createAsyncThunk(
  "area/list",
  async () => {
    try {

      const res = await ListArea.doListArea();
      if (res.status === 200) {

        // toast.success(res.data.message);


      }
    } catch (error: any) {

      const message = error.response.data?.message || error.message;
      toast.error(message);
    }
  }
);

const { reducer, actions } = createSlice({
  name: "area",
  initialState: {
    register: {
      loading: false,
      data: [],
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionListArea.pending, (state: any) => {
        state.register.loading = true;
      })
      .addCase(actionListArea.rejected, (state: any, action: any) => {
        state.register.loading = false;
        state.register.error = action.payload;
        state.register.data = {};
      })
      .addCase(actionListArea.fulfilled, (state: any, action: any) => {
        state.register.loading = false;
        state.register.data = action.payload;
        state.register.error = "";
      });
  },




});



export default reducer;
export { actionListArea };

