import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import dummyBookImg from "../../assets/dummyBookImg.jpg";
import resume from "../../assets/resume.pdf";
import { AuthContext } from "../../context/AuthContext";
import { LoginSuccess } from "../../context/AuthActions";
import { toast } from "react-toastify";
import axios from "axios";
import "./BookCard.css";

function BookCard({ bookDetails }) {
    const [isFav, setIsFav] = useState(false);
    const { user, dispatch } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PROXY_URL;
    let id, bookimg, pdflink, name, author, genre;

    if (bookDetails) {
        id = bookDetails._id;
        bookimg = bookDetails.bookimg;
        pdflink = bookDetails.pdflink;
        name = bookDetails.name;
        author = bookDetails.author;
        genre = bookDetails.genre;
    }

    useEffect(() => {
        if (user.favourites.includes(id)) {
            if (!isFav) setIsFav(true);
        } else {
            if (isFav) setIsFav(false);
        }

        if(id) {
            const starEle = document.getElementById(id);
            if (isFav) 
                starEle.style.color = "rgb(245, 212, 29)";
            else 
                starEle.style.color = "rgb(182, 182, 182)";
        }
    }, [user, id, isFav]);

    let changeStar = async (e) => {
        axios
            .post("/handlefavourite", {
                userid: user._id,
                bookid: id,
            })
            .then((res) => {
                if (res.data.status === "success") {
                    dispatch(LoginSuccess(res.data.user));
                } else {
                    toast.error(res.data.message);
                    console.log("Some error occurred!");
                }
            })
            .catch((err) => {
                console.log("Error (BookCard.js): ", err);
            });
    };

    let genreList = [];

    if (genre && typeof genre === "object") {
        Object.entries(genre).forEach(([_, value]) => genreList.push(value));
    }

    return (
        <div className="book_card card">
            <div className="book_img pointer">
                <a target="_blank" href={pdflink ? PF + pdflink : resume} rel="noreferrer nofollow">
                    <img src={bookimg ? PF + bookimg : dummyBookImg} alt="book" />
                </a>
            </div>
            <div className="book_details">
                <div className="bookdetail_container">
                    <div className="bookname">{name || "Promised Deadland"}</div>
                    <div className="bookauthor">{author || "Kim Jong Un"}</div>
                    <div className="bookgenre">
                        {genre && genre.length
                            ? genreList.length
                                ? genreList.map((e) => e.slice(0, 1).toUpperCase() + e.slice(1)).join(", ")
                                : genre
                            : "No genre"}
                    </div>
                </div>
                <div className="bookstar_container">
                    <FontAwesomeIcon icon={faStar} className="star pointer" id={id} onClick={changeStar} />
                </div>
            </div>
        </div>
    );
}

export default BookCard;
