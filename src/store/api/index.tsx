import { getToken } from "@/app/[locale]/utility/auth";
import axios from "axios";

export const NEXT_BASE_URL = "https://192.168.0.106:3002/";

const API = axios.create({
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

 const token = localStorage.getItem('accessToken');

 const headers={
    Authorization: token,
}

export const ChangeStatus = {
  doChangeStatus: (id:string) => {
    return API.patch(`area/${id}/status`, {},{
     headers
    });
  },
};


export const SearchArea = {
  doSearchArea: (payload: { category: string; search: string }, page: number) => {
    return API.post(`search/area?page=${page}`, payload, { headers });
  },
};






export const EditArea = {
  doEditArea: ({ id, data }: { id: string; data: FormData }) => {
    return API.put(`area/edit/${id}`, data, {
      headers
    });
  },
};
