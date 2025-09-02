import MenuLink from "./MenuLink.tsx";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><MenuLink hash={''} path={'/'}>Home</MenuLink></li>
                <li><MenuLink hash={'#faq'} path={'#faq'}>FAQ</MenuLink></li>
                <li><MenuLink hash={'#contacts'} path={'#contacts'}>Contacts</MenuLink></li>
                <li><MenuLink hash={'#about'} path={'#about'}>About</MenuLink></li>
            </ul>
        </nav>
    );
};

export default Menu;