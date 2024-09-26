import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/todos/authSlice";
import { useDispatch } from "react-redux";
import locationSlice from "./features/todos/locationSlice";
import registerSlice from "./features/todos/registerSlice";
import { ListAreaRTK } from "./features/todos/ListAreaRTK";
import ChangeStatusSlice from "./features/todos/ChangeStatusSlice";
import SearchAreaSlice from "./features/todos/SearchAreaSlice";


const store = configureStore({
  reducer: {
    auth: auth,
    locationSlice: locationSlice,
    registerSlice:registerSlice,
     ChangeStatusSlice,ChangeStatusSlice,
    SearchAreaSlice,SearchAreaSlice,
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
