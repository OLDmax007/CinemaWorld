import LinkHome from "./LinkHome.tsx";
import {useRouteError} from "react-router-dom";
import {handleError} from "../../helpers/handleError.ts";

const ErrorBlock = () => {
    const error: unknown = useRouteError();
    const errorMessage = handleError(error);
    return (
            <div className="flex flex-col gap-2 items-center justify-center h-screen">
                <h2>Page Not Found</h2>
                <span className="mb-4 text-red-500 italic"><i>{errorMessage}</i></span>
                <LinkHome/>
            </div>
    );
};

export default ErrorBlock;