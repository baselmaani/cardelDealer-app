import { axiosInstance } from './config';
import { urls } from './url';

export class Brand {
  static async getAllBrands(search) {
    const { data } = await axiosInstance.get(urls.brands, {
      params: {
        search,
      },
    });

    return data;
  }

  static async getAllModel(search) {
    const { data } = await axiosInstance.get(urls.models, {
      params: {
        search,
      },
    });

    return data;
  }
}
