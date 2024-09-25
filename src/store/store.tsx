import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/todos/authSlice";
import { useDispatch } from "react-redux";
import locationSlice from "./features/todos/locationSlice";
import registerSlice from "./features/todos/registerSlice";


const store = configureStore({
  reducer: {
    auth: auth,
    locationSlice: locationSlice,
    registerSlice:registerSlice,
  [SearchAreaRTK]: SearchAreaRTK,
    [SearchAreaRTK]: SearchAreaRTK,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(SearchAreaRTK.middleware)
      .concat(SearchAreaRTK.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
