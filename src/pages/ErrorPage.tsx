import {Link, useRouteError} from "react-router-dom";
import {handleError} from "../helpers/handleError.ts";

const ErrorPage = () => {
    const error: unknown = useRouteError();
    const errorMessage = handleError(error);
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
            <p className="mb-4 text-red-500 italic"><i>{errorMessage}</i></p>
            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go back Home
            </Link>
        </div>
    );
};

export default ErrorPage;