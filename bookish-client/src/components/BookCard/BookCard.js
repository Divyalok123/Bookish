import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import dummyBookImg from "../../assets/dummyBookImg.jpg";
import resume from "../../assets/resume.pdf";
import "./BookCard.css";

function BookCard({ imgsrc, pdflink, name, author, genre }) {
    let starClickCount = 0;

    let changeStar = (e) => {
        console.log("starClickCount: ", starClickCount);
        if (!starClickCount) {
            e.target.style.color = "rgb(245, 212, 29)";
            starClickCount--;
        } else {
            e.target.style.color = "rgb(182, 182, 182)";
            starClickCount++;
        }
    };

    return (
        <div className="book_card card">
            <div className="book_img pointer">
                <a target="_blank" href={pdflink || resume} rel="noreferrer">
                    <img src={imgsrc || dummyBookImg} alt={imgsrc} />
                </a>
            </div>
            <div className="book_details">
                <div className="bookdetail_container">
                    <div className="bookname">{name || "Promised Deadland"}</div>
                    <div className="bookauthor">{author || "Kim Jong Un"}</div>
                    <div className="bookgenre">{genre || "Thriller, Horror"}</div>
                </div>
                <div className="bookstar_container">
                    <FontAwesomeIcon icon={faStar} className="star pointer" onClick={changeStar} />
                </div>
            </div>
        </div>
    );
}

export default BookCard;
