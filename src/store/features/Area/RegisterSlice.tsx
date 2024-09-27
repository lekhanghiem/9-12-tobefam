
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AuthService, Register } from "../../api/index";
const actionRegister = createAsyncThunk(
  "auth/register",
  async (data: {  password?: string | undefined; username: string; email: string; company_name: string; confirmPassword: string; role_id: number;}) => {
    try {

      const res = await Register.doRegister(data);
      if (res.data.status === 'success') {
        toast.success(res.data.message);
            window.location.replace('/verify')


      }
    } catch (error: any) {

      const message = error.response.data?.message || error.message;
      toast.error(message);
    }
  }
);

const { reducer, actions } = createSlice({
  name: "auth",
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
      .addCase(actionRegister.pending, (state: any) => {
        state.register.loading = true;
      })
      .addCase(actionRegister.rejected, (state: any, action: any) => {
        state.register.loading = false;
        state.register.error = action.payload;
        state.register.data = {};
      })
      .addCase(actionRegister.fulfilled, (state: any, action: any) => {
        state.register.loading = false;
        state.register.data = action.payload;
        state.register.error = "";
      });
  },




});
export default reducer;
export { actionRegister };
