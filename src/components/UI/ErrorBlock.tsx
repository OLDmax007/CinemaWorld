import LinkHome from "./LinkHome.tsx";
import {useRouteError} from "react-router-dom";
import {handleError} from "@helpers/handleError.ts";

const ErrorBlock = () => {
    const error: unknown = useRouteError();
    const errorMessage = handleError(error);
    return (
        <div className="flex flex-col items-center justify-center gap-2 h-screen text-center">
                <h2>Page Not Found</h2>
            <span className="text-red-500 italic w-full"><i>{errorMessage}</i></span>
                <LinkHome/>
            </div>
    );
};

export default ErrorBlock;