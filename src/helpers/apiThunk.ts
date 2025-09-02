import {apiService} from "@/services/api.service.ts";
import {handleError} from "./handleError.ts";
import type {GetThunkAPI} from "@reduxjs/toolkit";

export const apiThunk = async <T>(thunkAPI: GetThunkAPI<{ rejectValue: string }>, url: string) => {
    try {
        return await apiService.get<T>(url)
    } catch (error) {
        return thunkAPI.rejectWithValue(handleError(error))
    }
}