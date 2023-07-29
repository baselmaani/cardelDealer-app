import axios from 'axios';
import AsyncStorge from '@react-native-async-storage/async-storage';

export const BASE_URL = 'http://192.168.1.114:8083/rest';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorge.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const axiosInstance = instance;
