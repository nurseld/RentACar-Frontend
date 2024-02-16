import BaseService from "./baseService";


class CarService extends BaseService {
    constructor() {
        super();
        this.apiUrl = "cars";
    }

    async getAvailable() {
        return await axiosInstance.get(this.apiUrl + "/getAvailableCars");
    }
}

export default new CarService();