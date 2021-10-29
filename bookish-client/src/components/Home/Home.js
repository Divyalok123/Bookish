import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

function Home() {

    var moveToNext = () => {
        let ele = document.getElementsByClassName('genre_list_container')[0];
        ele.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (    
        <div className="home_container">
            <div className="header">
                <div className="header_top">
                    <h1 className="f_exo">Welcome to Bookish!</h1>
                    <br/>
                    <p className="f_exo">A bookstore for the reader in you :)</p>    
                </div>
                <div className="header_bottom">
                    <p className="f_exo">Choose a Genre</p>
                    <FontAwesomeIcon 
                        icon={ faChevronDown } 
                        className="home_header_down_icon" 
                        onClick={ moveToNext } 
                    /> 
                </div>
            </div>
            <div className="genre_list_container">
                <div className="genre_list_header">
                    <p className="f_saira">What would you like to read ?</p>
                </div>
                <div className="genre_list">
                    <div className="genre_card">
                        <span>Thriller</span>
                    </div>
                    <div className="genre_card">
                        <span>Crime</span>
                    </div>
                    <div className="genre_card">
                        <span>Romance</span>
                    </div>
                    <div className="genre_card">
                        <span>Suspense</span>
                    </div>
                    <div className="genre_card">
                        <span>Horror</span>
                    </div>
                    <div className="genre_card">
                        <span>Action</span>
                    </div>
                    <div className="genre_card">
                        <span>Kids</span>
                    </div>
                    <div className="genre_card">
                        <span>Comedy</span>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;