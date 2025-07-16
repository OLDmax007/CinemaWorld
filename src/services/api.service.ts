import {axiosInstance} from "./axiosInstance.ts";
import {handleError} from "../helpers/handleError.ts";

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
