import CoreService from './CoreService';
import { type AxiosResponse } from 'axios';

class CreateService extends CoreService {
    private baseRoute = "/create_service";

    async create(data: string): Promise<AxiosResponse<{ message: string }> | null> {
        try {
            const response = await this.getApi().post<{ message: string }>(this.baseRoute, { 
                name: data 
            });
            return response;
        } catch (error) {
            console.error("Error creating resource:", error);
            return null;
        }
    }
}

export default CreateService;