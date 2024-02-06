import axios from "axios";
import {
    decreaseRequestCount,
    increaseRequestCount,
} from "../../../store/loading/loadingSlice";
import tokenService from "../../../services/tokenService";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/api/"
});

axiosInstance.interceptors.request.use(config => {
    let token = tokenService.getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    // store.dispatch(increaseRequestCount());
    return config;
});

axios.interceptors.response.use(
    response => {
        // store.dispatch(decreaseRequestCount());
        return response;
    },
    error => {
        // store.dispatch(decreaseRequestCount());
    },
);

export default axiosInstance;