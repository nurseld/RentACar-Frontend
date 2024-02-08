import axiosInstance from "../core/utils/interceptors/axiosInterceptors";

class AuthService {
    constructor() {
        this.apiUrl = "auth";
    }
    async customerRegister(request) {
        return await axiosInstance.post(this.apiUrl + "/individual", request);
    }

    async corporateRegister(request) {
        return await axiosInstance.post(this.apiUrl + "/corporate", request);
    }

    async login(request) {
        return await axiosInstance.post(this.apiUrl + "/login", request);
    }
}

export default new AuthService();