import {Atom} from "react-loading-indicators";
import * as React from "react";
import {type FC} from "react";

type RenderStatusProps = {
    isLoading: boolean;
    children: React.ReactNode
};


const RenderStatus: FC<RenderStatusProps> = ({isLoading, children}) => {

    if (isLoading) {
        return (
            <div className="flex justify-center items-center">
                <Atom color="#dfdccc" size="large" text="" textColor="#ff00f8"/>
            </div>
        );

    }
    return <>{children}</>;
};

export default RenderStatus;
