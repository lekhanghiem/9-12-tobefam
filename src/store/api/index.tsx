import { getToken } from "@/app/[locale]/utility/auth";
import axios from "axios";

export const NEXT_BASE_URL = "http://192.168.0.106:3001/";

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

export const ListArea = {
  doListArea: () => {
    const token = localStorage.getItem('accessToken');
    return API.get('/area/list', {
      headers: {
        Authorization: token,
      },
    });
  },
};

export const ChangeStatus = {
  doChangeStatus: () => {
    const token = localStorage.getItem('accessToken');
    return API.patch('/area/list', {
      headers: {
        Authorization: token,
      },
    });
  },
};


export const Text = {
  doText: () => {
    const token = localStorage.getItem('accessToken');
    return API.get('/area/list', {
      headers: {
        Authorization: token,
      },
    });
  },
};