import axios from 'axios';
import  { type AxiosInstance } from 'axios';

class CoreService {
    protected api: AxiosInstance;

    constructor() {
        this.api = axios.create({
          baseURL: "http://localhost:8000",
          timeout: 1000 * 10,
        });
    }

    getApi(): AxiosInstance {
        return this.api;
      }
}

export default CoreService;