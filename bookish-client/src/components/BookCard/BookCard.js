import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import dummyBookImg from '../../assets/dummyBookImg.jpg';
import './BookCard.css'

function BookCard(props) {
    let starClickCount = 1;

    let changeStar = (e) => {
        console.log(e);
        if(starClickCount) {
            e.target.style.color = "rgb(245, 212, 29)";
            starClickCount--;
        } else {
            e.target.style.color = "rgb(182, 182, 182)";
            starClickCount++;
        }

        console.log(e.target.style.color);
    }

    return (
        <div className="book_card">
            <div className="book_img pointer">
                <img src={dummyBookImg} alt="Dummy book img" />
            </div>
            <div className="book_details">
                <div className="bookdetail_container">
                    <div className="bookname">Promised Deadland</div>
                    <div className="bookauthor">Kim Jong Un</div>
                    <div className="bookgenre">Thriller, Horror</div>
                </div>
                <div className="bookstar_container">
                    <FontAwesomeIcon icon={ faStar } className="star pointer" onClick={changeStar}/>
                </div>
            </div>
            
        </div>
    )
}

export default BookCard;