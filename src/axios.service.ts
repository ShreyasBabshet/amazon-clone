import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((req: any) => {
    const BaseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3100';
    console.log(BaseUrl)
    req.url = BaseUrl + req.url;
    return req;
})
export default axiosInstance;