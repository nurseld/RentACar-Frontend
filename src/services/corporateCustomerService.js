import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import BaseService from "./baseService";


class CorporateCustomerService {
    constructor() {
        this.apiUrl = "corporate";
    }

    async getByUserId(id) {
        return await axiosInstance.get(this.apiUrl + "/getByUserId/" + id);
    }
}

export default new CorporateCustomerService();