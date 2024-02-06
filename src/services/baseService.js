const axiosInstance = require("../core/utils/interceptors/axiosInterceptors");

class BaseService {
    constructor() {
        this.apiUrl = "";
    }

    getAll() {
        return axiosInstance.get(this.apiUrl);
    }

    getById(id) {
        return axiosInstance.get(this.apiUrl + "/" + id);
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

module.exports = BaseService;