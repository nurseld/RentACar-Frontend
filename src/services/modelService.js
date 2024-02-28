import BaseService from "./baseService";

class ModelService extends BaseService {
  constructor() {
    super();
    this.apiUrl = "models";
  }
}

export default new ModelService();
