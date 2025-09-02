import {Link} from "react-router-dom";

const FooterNav = () => {
    return (
        <nav className={'footer-nav'} aria-label="Footer navigation">
            <ul>
                <li><Link to="">Home</Link></li>
                <li id={'about'}><Link to="">About</Link></li>
                <li id={'faq'}><Link to="">FAQ</Link></li>
                <li id={'contacts'}><Link to="">Contacts</Link></li>
            </ul>
        </nav>
    );
};

export default FooterNav;