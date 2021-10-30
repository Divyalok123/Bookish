import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import dummyBookImg from '../../assets/dummyBookImg.jpg';
import './BookCard.css'

function BookCard({imgsrc, name, author, genre}) {
    let starClickCount = 1;

    let changeStar = (e) => {
        if(starClickCount) {
            e.target.style.color = "rgb(245, 212, 29)";
            starClickCount--;
        } else {
            e.target.style.color = "rgb(182, 182, 182)";
            starClickCount++;
        }
    }

    return (
        <div className="book_card card">
            <div className="book_img pointer">
                <img src={ (imgsrc || dummyBookImg) } alt="Dummy book img" />
            </div>
            <div className="book_details">
                <div className="bookdetail_container">
                    <div className="bookname">{name || "Promised Deadland"}</div>
                    <div className="bookauthor">{author || "Kim Jong Un"}</div>
                    <div className="bookgenre">{genre || "Thriller, Horror"}</div>
                </div>
                <div className="bookstar_container">
                    <FontAwesomeIcon icon={ faStar } className="star pointer" onClick={changeStar}/>
                </div>
            </div>
            
        </div>
    )
}

export default BookCard;