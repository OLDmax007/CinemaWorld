import {Link} from "react-router-dom";

const FooterNav = () => {
    return (
        <nav className={'footer-nav'} aria-label="Footer navigation">
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="">Info</Link></li>
                <li><Link to="">Support</Link></li>
                <li><Link to="">Contacts</Link></li>
            </ul>
        </nav>
    );
};

export default FooterNav;