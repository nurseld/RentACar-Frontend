import BaseService from "./baseService";


class BrandService extends BaseService {
    constructor() {
        super();
        this.apiUrl = "brands";
    }
}

export default new BrandService();