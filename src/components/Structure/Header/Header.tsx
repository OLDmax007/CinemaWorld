import Menu from "./Menu/Menu.tsx";
import UserInfo from "./UserInfo.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
  <header>
      <div className={'container'}>
          <Link to={'/'}>
              <h1>CinemaWorld</h1>
          </Link>
          <Menu/>
          <UserInfo/>
      </div>
  </header>
    );
};

export default Header;