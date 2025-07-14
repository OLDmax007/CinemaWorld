import Header from "../components/Structure/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Structure/Footer/Footer.tsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default MainLayout;