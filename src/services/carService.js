import BaseService from "./baseService";


class CarService extends BaseService {
    constructor() {
        super();
        this.apiUrl = "cars";
    }
}

export default new CarService();