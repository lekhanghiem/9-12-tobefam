  import { AuthService } from "@/store/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import { toast } from "react-toastify";

  const actionLogin = createAsyncThunk(
    "auth/login",
    async (data: { email: string; password: string }) => {
      try {
        const res = await AuthService.doLogin(data);
        if (res.status === 200) {

                  localStorage.setItem("accessToken", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          toast.success(res.data.message);
window.location.replace('/')
          return res.data.data;
        } else {
          toast.error(res.data.message);
          return [];
        }
      } catch (error: any) {
        const message = error.response.data?.message || error.message;
        toast.error(message);
        return error.response;
      }
    }
  );

  const { reducer, actions } = createSlice({
    name: "auth",
    initialState: {
      login: {
        loading: false,
        data: [],
        error: "",
      },
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(actionLogin.pending, (state: any) => {
          state.login.loading = true;
        })
        .addCase(actionLogin.rejected, (state: any, action: any) => {
          state.login.loading = false;
          state.login.error = action.payload;
          state.login.data = {};
        })
        .addCase(actionLogin.fulfilled, (state: any, action: any) => {
          state.login.loading = false;
          state.login.data = action.payload;
          state.login.error = "";
        });
    },




  });




  export default reducer;
  export { actionLogin };
