import axios, {AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
})

export const api = {
    get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      const response = await instance.get<T>(url, config);
      return response.data;
    },
  
    post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
      const response = await instance.post<T>(url, data, config);
      return response.data;
    },

};