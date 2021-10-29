import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <span className="f_gemunu">
                Developed with 
                &nbsp;
                <FontAwesomeIcon icon={ faHeart } className="footer_heart_icon" />
                &nbsp; 
                by Divyalok & Shubham
            </span>
        </footer>
    )
}

export default Footer;