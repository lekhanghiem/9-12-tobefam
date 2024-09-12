
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {  Text } from "../../api/index";
const initialState= {
    text: {
      loading: false,
      data: [],
      error: "",
    },
  }
const actionText = createAsyncThunk(
  "area/texts",
  async () => {
    try {
      const res = await Text.doText();
      if (res.status === 200) {
        toast.success(res.data.message);
return res.data
      }
    } catch (error: any) {
      const message = error.response.data?.message || error.message;
      toast.error(message);
    }
  }
);

const { reducer, actions } = createSlice({
  name: "area",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionText.pending, (state: any) => {
        state.text.loading = true;
      })
      .addCase(actionText.rejected, (state: any, action: any) => {
        state.text.loading = false;
        state.text.error = action.payload;
        state.text.data = {};
      })
      .addCase(actionText.fulfilled, (state: any, action: any) => {
        state.text.loading = false;
        state.text.data = action.payload;
        state.text.error = "";
      });
  },




});
export default reducer;
export { actionText };

