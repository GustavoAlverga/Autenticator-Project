import CoreService from './CoreService';
import { type AxiosResponse } from 'axios';

class RunSingleAutentication extends CoreService {
    private baseRoute: string = "/run_single_authentication";

    async run(data: string): Promise<AxiosResponse | null> {
        try {
            const response = await this.getApi().post(this.baseRoute, {mensage: data});
            return response;
        } catch (error) {
            console.error("Error running single authentication:", error);
            return null;
        }
    }
}

export default RunSingleAutentication;