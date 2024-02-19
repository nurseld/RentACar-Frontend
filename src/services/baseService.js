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
        return axiosInstance.post(this.apiUrl + "/add", request);
    }

    async update(request) {
        return await axiosInstance.put(this.apiUrl + "/update", request);
    }

    async delete(id) {
        return await axiosInstance.delete(this.apiUrl + "/" + id);
    }
}

export default BaseService;