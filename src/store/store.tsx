import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/Area/authSlice";
import { useDispatch } from "react-redux";
import { ListAreaRTK } from "./features/Area/ListAreaRTK";
import ChangeStatusSlice from "./features/Area/ChangeStatusSlice";
import SearchAreaSlice from "./features/Area/SearchAreaSlice";
import RegisterSlice from "./features/Area/RegisterSlice";


const store = configureStore({
  reducer: {
    auth: auth,
    RegisterSlice:RegisterSlice,
     ChangeStatusSlice,ChangeStatusSlice,
      Search: SearchAreaSlice,
     [ListAreaRTK.reducerPath]: ListAreaRTK.reducer,

  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(ListAreaRTK.middleware)
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
