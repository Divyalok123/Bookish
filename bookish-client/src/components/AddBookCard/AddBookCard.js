import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import "./AddBookCard.css";

function AddBookCard() {
    return (
        <div className="addbook_card card">
            <FontAwesomeIcon icon={faPlusSquare} className="card_plus_icon" />
            <div className="addbook_text f_exo">Add Book</div>
        </div>
    );
}

export default AddBookCard;
