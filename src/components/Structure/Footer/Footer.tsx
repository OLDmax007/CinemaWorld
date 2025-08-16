import SocialMediaNav from "./SocialMediaNav.tsx";
import FooterNav from "./FooterNav.tsx";
import DownloadNav from "./DownloadNav.tsx";


const Footer = () => {
    return (
        <footer id={'footer'}>
            <SocialMediaNav/>
            <FooterNav/>
            <DownloadNav/>
        </footer>
    );
};


export default Footer;