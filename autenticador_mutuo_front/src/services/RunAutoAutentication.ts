import CoreService from './CoreService';
import { type AxiosResponse } from 'axios';

class RunAutoAutentication extends CoreService {
    private baseRoute: string = "/run_auto_authentication";

    async run(data: object): Promise<AxiosResponse | null> {
        try {
            const response = await this.getApi().post(this.baseRoute, data);
            return response;
        } catch (error) {
            console.error("Error running auto authentication:", error);
            return null;
        }
    }
}

export default RunAutoAutentication;