import {axiosInstance} from "./axiosInstance.ts";
import {handleError} from "@helpers/handleError.ts";

export const apiService = {
    get: async <T>(url: string):Promise<T> => {
        try {
            const {data} =await axiosInstance.get<T>(url)
            return data
        } catch (error) {
           throw handleError(error)
        }
    }
}
