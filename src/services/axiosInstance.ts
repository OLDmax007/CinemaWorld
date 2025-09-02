import axios from "axios";
import {baseUrl} from "@constants/urls.ts";
import {authConfig} from "@constants/auth.config.ts";


export const axiosInstance = axios.create(
    {
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    }
)

axiosInstance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${authConfig.token}`
    return request
})