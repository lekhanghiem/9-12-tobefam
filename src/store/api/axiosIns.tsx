import axios from "axios"
import { useRouter } from 'next/navigation'
// import { useLocale } from 'next-intl';

// export const baseURL = "https://api-nowblockchain.tocuna.com/";
// export const baseURL = "https://apizstaking.nowblockchain.io/"

export const baseURL = "http://192.168.0.106:3001"
const axiosIns = axios.create({
  baseURL: baseURL,
  timeout: 5000,

  // headers: {'X-Custom-Header': 'foobar'}
})

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use(config => {
  // Retrieve token from localStorage
  const token = localStorage.getItem("accessToken")

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {}

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    // config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : ''
    config.headers.Authorization = token
  }
  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // Handle error
    if (error.response.status === 401) {
      // ℹ️ Logout user and redirect to login page
      // Remove "userData" from localStorage
      localStorage.removeItem("userData")

      // Remove "accessToken" from localStorage
      localStorage.removeItem("accessToken")
      localStorage.removeItem("userAbilities")
  const router = useRouter()
// const locale =useLocale();

      // If 401 response returned from api
      router.push(`/login`)
    } else {
      return Promise.reject(error)
    }
  },
)
export default axiosIns