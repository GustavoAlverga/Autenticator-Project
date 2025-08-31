import CoreService from './CoreService';
import { type AxiosResponse } from 'axios';

class GetAllServices extends CoreService {
    private baseRoute: string = "/get_all_services_and_keys";

    async getAll(): Promise<AxiosResponse | null> {
        try {
            const response = await this.getApi().get(this.baseRoute);
            return response;
        } catch (error) {
            console.error("Error fetching all services:", error);
            return null;
        }
    }
}

export default GetAllServices;