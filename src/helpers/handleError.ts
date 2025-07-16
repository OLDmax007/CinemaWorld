import axios from "axios";

export const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        return error.message
    }

    if (error instanceof Error) {
        return error.message;
    }

    return 'Something went wrong';
}