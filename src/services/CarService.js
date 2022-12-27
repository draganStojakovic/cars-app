import ApiService from "./ApiService";

class CarService extends ApiService {
  async getAll() {
    return await this.client.get("/cars");
  }
  async add(car) {
    await this.client.post("/cars", car);
  }
}

export const carService = new CarService();
