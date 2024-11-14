import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/Login/AuthSlice";
import { useDispatch } from "react-redux";
import SearchAreaSlice from "./features/Area/SearchAreaSlice";
import RegisterSlice from "./features/Login/RegisterSlice";
import ChangeStatusSlice from "./features/Area/ChangeStatusSlice";
import EditAreaSlice from "./features/Area/EditAreaSlice";
import { Location } from "./features/Area/LocationRTK";
import SearchSlice from "./features/Product/SearchProductSlice";
import ChangeStatusProductSlice from "./features/Product/ChangeStatusProductSlice";
import EditProductSlice from "./features/Product/EditProductSlice";
import ChangePasswordSlice from "./features/Login/ChangePasswordSlice";
import EditUserSlice from "./features/Login/EditUserSlice";
import {  LocationCompany } from "./features/Login/LocationCompanyRTK";
import CreateFarmSlice from "./features/Area/CreateFarmSlice";
import EditCompanySlice from "./features/Login/EditCompanySlice";
import VerifySlice from "./features/Login/VerifySlice";


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
     EditCompanySlice:EditCompanySlice,
     CreateFarmSlice:CreateFarmSlice,
     VerifySlice:VerifySlice,



     [Location.reducerPath]: Location.reducer,
     [LocationCompany.reducerPath]: LocationCompany.reducer,


  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(Location.middleware)
    .concat(LocationCompany.middleware)
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();