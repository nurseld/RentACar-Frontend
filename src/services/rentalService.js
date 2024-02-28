import BaseService from "./baseService";

class RentalService extends BaseService {
  constructor() {
    super();
    this.apiUrl = "rentals";
  }
}

export default new RentalService();
