import { getToken } from "@/app/utility/auth";
import { FormCreateFarm, FormDataEditUser, FormDataPassword, FormEditCompany, FormVerify } from "@/types/types";
import axios from "axios";

export const NEXT_BASE_URL = "https://192.168.1.20:3002/";

const API = axios.create({
  // timeout:10000,
  baseURL: NEXT_BASE_URL,
});

API.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
  }
);

//AUTH
export const AuthService = {
  doLogin: (data: { email: string; password: string ;}) =>
    API.post("account/login", data),

};
export const Register = {
  doRegister: (data: {  password?: string | undefined; username: string; email: string; company_name: string; confirmPassword: string; role_id: number;}) =>
    API.post("account/register", data),

};



export const ChangeStatus = {
  doChangeStatus: (id:string) => {
 const token = localStorage.getItem('accessToken');

    return API.patch(`area/${id}/status`, {},{

  headers:{
    Authorization: token,
}
    });
  },
};


export const SearchArea = {
  doSearchArea: (payload: { category: string; search: string }, page: number) => {
     const token = localStorage.getItem('accessToken');

    return API.post(`search/area?page=${page}`, payload, { headers:{
    Authorization: token,
} });
  },
};





export const EditArea = {
  doEditArea: ({ id, data }: { id: string; data: FormData }) => {
     const token = localStorage.getItem('accessToken');

    return API.put(`area/edit/${id}`, data, {
       headers:{
    Authorization: token,
}
    });
  },
};

export const SearchProduct = {
  doSearchProduct: (payload: { category: number; search: string },page:number) => {
     const token = localStorage.getItem('accessToken');

    return API.post(`search/21/product?page=${page}`, payload, {   headers:{
    Authorization: token,
} });
  },
};
export const ChangeStatusProduct = {
  doChangeStatusProduct: (product_code:string) => {
     const token = localStorage.getItem('accessToken');

    return API.patch(`product/${product_code}/status`, {},{
      headers:{
    Authorization: token,
}
    });
  },
};


export const EditProduct = {
  doEditProduct: ({ product_code, data }: { product_code: string; data: FormData }) => {
     const token = localStorage.getItem('accessToken');

    return API.put(`product/edit/${product_code}`, data, {
       headers:{
    Authorization: token,
}
    });
  },
};

export const ChangePassword = {
  doChangePassword: ( data :FormDataPassword ) => {
     const token = localStorage.getItem('accessToken');

    return API.post(`account/change-password`, data, {
       headers:{
    Authorization: token,
}
    });
  },
};

export const EditUser = {
  doEditUser: ( data :FormDataEditUser ) => {
     const token = localStorage.getItem('accessToken');

    return API.put(`account/edit-user-info`, data, {
       headers:{
    Authorization: token,
}
    });
  },
};

export const EditCompany = {
  doEditCompany: ( data :FormEditCompany ) => {
     const token = localStorage.getItem('accessToken');

    return API.put(`company/edit`, data, {
       headers:{
    Authorization: token,
}
    });
  },
};
export const CreateFarm = {
  doCreateFarm: ( data :FormCreateFarm ) => {
     const token = localStorage.getItem('accessToken');

    return API.post(`area/create`, data, {
       headers:{
    Authorization: token,
}
    });
  },
};

export const Verify = {
  doVerify: ( data :FormVerify ) => {

    return API.post(`account/verify`, data, {

    });
  },
};

export const Logout = {
  doLogout: ( ) => {
     const token = localStorage.getItem('accessToken');

    return API.put(`account/logout`, {}, {
       headers:{
    Authorization: token,
}
    });
  },
};