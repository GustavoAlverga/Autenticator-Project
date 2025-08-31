import CoreService from './CoreService';
import { type AxiosResponse } from 'axios';

class ClearAll extends CoreService {
    private baseRoute: string = "/clear_all";

    async clear(): Promise<AxiosResponse | null> {
        try {
            const response = await this.getApi().put(this.baseRoute);
            return response;
        } catch (error) {
            console.error("Error clearing all resources:", error);
            return null;
        }
    }
}

export default ClearAll;