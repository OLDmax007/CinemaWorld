import axios from "axios";

export const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        console.error(error.message)
        return error.message
    }

    if (error instanceof Error) {
        console.warn(error.message)
        return error.message;
    }

    return 'Something went wrong';
}