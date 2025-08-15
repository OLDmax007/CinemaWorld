import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><a href={'#footer'}>About</a></li>
                <li><a href={'#footer'}>Contacts</a></li>
                <li><a href={'#footer'}>FAQ</a></li>
            </ul>
        </nav>
    );
};

export default Menu;