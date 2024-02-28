import BaseService from "./baseService";

class ColorService extends BaseService {
  constructor() {
    super();
    this.apiUrl = "colors";
  }
}

export default new ColorService();
