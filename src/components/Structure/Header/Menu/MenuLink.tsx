import type {FC, ReactNode} from "react";
import {useLocation} from "react-router-dom";

type MenuLinkProps = {
    hash: string
    path: string
    children: ReactNode
}

const MenuLink: FC<MenuLinkProps> = ({path, hash, children}) => {
    const location = useLocation()
    const isActive =
        path === '/' && hash === ''
            ? location.pathname === '/' && location.hash === '' && location.search === ''
                ? 'text-gray-400'
                : undefined
            : location.hash === hash
                ? 'text-gray-400'
                : undefined
    return (
        <a href={path} className={isActive}>{children}</a>
    );
};

export default MenuLink;