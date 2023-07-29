import { axiosInstance } from './config';
import { urls } from './url';

export class DealerDevice {
  static async addDevice(device) {
    const result = await axiosInstance
      .post(urls.dealerDevice, {
        ...device,
      })
      .then((res) => res.data);
    return result;
  }
  static async getDevices() {
    const result = await axiosInstance
      .get(urls.dealerDevice)
      .then((res) => res.data);
    return result;
  }
  static async deleteDeviceById(id) {
    const result = await axiosInstance
      .delete(urls.dealerDevice + id)
      .then((res) => res.data);
    return result;
  }
  static async updateDeviceById(id, device) {
    const result = await axiosInstance
      .put(urls.dealerDevice + id, {
        ...device,
      })
      .then((res) => res.data);
    return result;
  }
  static async getDeviceById(id) {
    const result = await axiosInstance
      .get(urls.dealerDevice + id)
      .then((res) => res.data);
    return result;
  }
}
