import {AxiosError} from "axios";

export const handleError = (error: unknown) => {
    if (error instanceof AxiosError) {
        const msg = error.response?.data?.message || error.message;
        return `Axios error: ${msg}`;
    }

    if (error instanceof Error) {
        return error.message;
    }

    if (
        typeof error === "object" &&
        error !== null &&
        "status" in error &&
        "statusText" in error &&
        "data" in error
    ) {
        const errObj = error as any;
        return `${errObj.status} ${errObj.statusText}: ${errObj.data}`;
    }


    if (typeof error === 'string') {
        return error
    }

    return 'Unknown error';
}