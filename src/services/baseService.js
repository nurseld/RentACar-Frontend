import axiosInstance from "../core/utils/interceptors/axiosInterceptors";

class BaseService {
    constructor() {
        this.apiUrl = "";
    }

    async getAll() {
        return await axiosInstance.get(this.apiUrl + "/getAll");
    }

    async getById(id) {
        return await axiosInstance.get(this.apiUrl + "/getById/" + id);
    }

    add(request) {
        return axiosInstance.post(this.apiUrl, request);
    }

    update(request) {
        return axiosInstance.put(this.apiUrl, request);
    }

    delete(id) {
        return axiosInstance.delete(this.apiUrl + "/" + id);
    }
}

export default BaseService;