import {Link} from "react-router-dom";

const LinkHome = () => {
    return (
        <Link
            to={'/'}
            className={'link-home p-2!'}
        >
            Go back Home
        </Link>
    );
};

export default LinkHome;