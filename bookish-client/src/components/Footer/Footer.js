import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <span className="f_gemunu">
                Developed with 
                &nbsp;
                <FontAwesomeIcon icon={ faHeart } className="footer_heart_icon" />
                &nbsp; 
                by 
                &nbsp;
                <a
                    className="link" 
                    href="http://github.com/divyalok123"
                    target="_blank"
                    rel="noreferrer"
                >
                    Divyalok Jaiswal                
                </a>
            </span>
            <span className="footer_links">
                <a
                    className="link" 
                    href="http://github.com/divyalok123"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    className="link" 
                    href="http://github.com/divyalok123"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />           
                </a>
            </span>
        </footer>
    )
}

export default Footer;