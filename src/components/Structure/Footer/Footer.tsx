import SocialMediaNav from "./Nav/SocialMediaNav.tsx";
import FooterNav from "./Nav/FooterNav.tsx";
import DownloadNav from "./Nav/DownloadNav.tsx";


const Footer = () => {
    return (
        <footer id={'footer'}>
            <div className="container">
                <SocialMediaNav/>
                <FooterNav/>
                <DownloadNav/>
            </div>
        </footer>
    );
};


export default Footer;