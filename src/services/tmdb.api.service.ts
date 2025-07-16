import {axiosInstance} from "./instances/axiosInstance.ts";
import axios from "axios";

export const apiService = {
    get: async <T>(url: string):Promise<T> => {
        try {
            console.log(url)
            const {data} =await axiosInstance.get<T>(url)
            console.log(data)
            return data
        } catch (e) {
           throw handleError(e)
        }
    }
}

const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        return error.message
    }
}