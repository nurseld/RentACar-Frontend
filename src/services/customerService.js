import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import BaseService from "./baseService";


class CustomerService {
    constructor() {
        this.apiUrl = "customers";
    }

    async getByUserId(id) {
        return await axiosInstance.get(this.apiUrl + "/getByUserId/" + id);
    }
}

export default new CustomerService();