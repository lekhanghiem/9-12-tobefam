import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/todos/authSlice";
import { useDispatch } from "react-redux";
import locationSlice from "./features/todos/locationSlice";
import registerSlice from "./features/todos/registerSlice";
import { ListAreaRTK } from "./features/todos/ListAreaRTK";
import ChangeStatusSlice from "./features/todos/ChangeStatusSlice";
import SearchAreaRTK from "./features/todos/SearchAreaRTK";


const store = configureStore({
  reducer: {
    auth: auth,
    locationSlice: locationSlice,
    ChangeStatusSlice,ChangeStatusSlice,

    registerSlice:registerSlice,
     [ListAreaRTK.reducerPath]: ListAreaRTK.reducer,
     [SearchAreaRTK.reducerPath]: SearchAreaRTK.reducer,

  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(ListAreaRTK.middleware)
    .concat(SearchAreaRTK.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
