import SocialMediaNav from "./SocialMediaNav.tsx";
import FooterNav from "./FooterNav.tsx";
import DownloadNav from "./DownloadNav.tsx";


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