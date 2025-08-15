import {Link} from "react-router-dom";
import AppleIcon from '../../../assets/footer-icons/apple.svg?react'
import GooglePlayIcon from '../../../assets/footer-icons/google-play.svg?react'

const DownloadNav = () => {
    return (
        <nav className={'download-nav'} aria-label='Download links'>
            <ul>
                <li>
                    <Link to="">
                        <AppleIcon width={'50px'} height={'50px'}/>
                        <div>
                            <span>Upload to</span>
                            <span>App Store</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <GooglePlayIcon width={'50px'} height={'50px'}/>
                        <div>
                            <span>Upload to</span>
                            <span>Google Play</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default DownloadNav;