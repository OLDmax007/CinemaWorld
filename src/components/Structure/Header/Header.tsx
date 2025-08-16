import Menu from "./Menu.tsx";
import UserInfo from "../../User/UserInfo.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
  <header>
      <Link to={'/'}>
          <h1>CinemaWorld</h1>
      </Link>
      <Menu/>
      <UserInfo/>
  </header>
    );
};

export default Header;