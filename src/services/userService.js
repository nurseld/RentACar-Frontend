import BaseService from "./baseService";


class UserService extends BaseService {
    constructor() {
        super();
        this.apiUrl = "users";
    }
}

export default new UserService();