import { AxiosInstance, default as axios } from 'axios';

const request: AxiosInstance = axios.create({
  baseURL: 'https://dev.emailer-electron-laravel.cronix.life/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default request;
