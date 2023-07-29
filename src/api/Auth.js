import { axiosInstance } from './config';
import { urls } from './url';

export class Auth {
  static async login(dt) {
    const { data } = await axiosInstance.post(urls.auth.login, dt);
    return data;
  }
}
