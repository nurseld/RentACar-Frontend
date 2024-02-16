import axios from "axios";
import {
    decreaseRequestCount,
    increaseRequestCount,
} from "../../../store/loading/loadingSlice";
import tokenService from "../../../services/tokenService";
import { loadToken, storeToken } from "../../../store/storage/storage";
import { toast } from "react-toastify";



const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/api/"
});

axiosInstance.interceptors.request.use(config => {
    let token = tokenService.getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`

    // store.dispatch(increaseRequestCount());
    return config;
});

axios.interceptors.response.use(
    response => {
        // store.dispatch(decreaseRequestCount());
        return response;
    },
    error => {
        console.log(error.response.data.message)

        // store.dispatch(decreaseRequestCount());
    },
);

let authToken = loadToken();

export function setToken(token) {
    authToken = token;
    storeToken(token);
}
export default axiosInstance;