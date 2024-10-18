import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/Login/authSlice";
import { useDispatch } from "react-redux";
import { ListAreaRTK } from "./features/Area/ListAreaRTK";
import SearchAreaSlice from "./features/Area/SearchAreaSlice";
import RegisterSlice from "./features/Login/RegisterSlice";
import ChangeStatusSlice from "./features/Area/ChangeStatusSlice";
import EditAreaSlice from "./features/Area/EditAreaSlice";
import { Location } from "./features/Area/LocationRTK";
import SearchSlice from "./features/Product/SearchSlice";
import ChangeStatusProductSlice from "./features/Product/ChangeStatusProductSlice";
import EditProductSlice from "./features/Product/EditProductSlice";
import ChangePasswordSlice from "./features/Login/ChangePasswordSlice";
import EditUserSlice from "./features/Login/EditUserSlice";


const store = configureStore({
  reducer: {
    auth: auth,
    RegisterSlice:RegisterSlice,
     ChangeStatusSlice:ChangeStatusSlice,
      Search: SearchAreaSlice,
      EditAreaSlice:EditAreaSlice,
      SearchSlice: SearchSlice,
     ChangeStatusProductSlice:ChangeStatusProductSlice,
     EditProductSlice:EditProductSlice,
     ChangePasswordSlice:ChangePasswordSlice,
     EditUserSlice:EditUserSlice,


     [Location.reducerPath]: Location.reducer,


  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(Location.middleware)

});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
