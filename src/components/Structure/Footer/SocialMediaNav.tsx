import {Link} from "react-router-dom";
import InstagramIcon from '../../../assets/footer-icons/instagram.svg?react'
import FacebookIcon from '../../../assets/footer-icons/facebook.svg?react'
import TelegramIcon from '../../../assets/footer-icons/telegram.svg?react'
import YoutubeIcon from '../../../assets/footer-icons/youtube.svg?react'

const SocialMediaNav = () => {
    return (
        <nav className={'social-media-nav'} aria-label="Social media links">
            <ul>
                <li><Link to="" aria-label="Instagram link">
                    <InstagramIcon width={'25px'} height={'25px'}/>
                </Link></li>
                <li><Link to="" aria-label="Facebook link">
                    <FacebookIcon width={'25px'} height={'25px'}/>
                </Link></li>
                <li><Link to="" aria-label="Telegram link">
                    <TelegramIcon width={'25px'} height={'25px'}/>
                </Link></li>
                <li><Link to="" aria-label="Youtube link">
                    <YoutubeIcon width={'25px'} height={'25px'}/>
                </Link></li>
            </ul>
        </nav>
    );
};

export default SocialMediaNav;