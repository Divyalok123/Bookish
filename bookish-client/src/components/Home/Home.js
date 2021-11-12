import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
    useEffect(() => {
        document.title = "Bookish";
    }, []);

    var moveToNext = () => {
        let ele = document.getElementsByClassName("genre_list_container")[0];
        ele.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <div className="home_container">
            <div className="header">
                <div className="header_top">
                    <h1 className="f_exo">Welcome to Bookish!</h1>
                    <br />
                    <p className="f_exo">A bookstore for the reader in you :)</p>
                </div>
                <div className="header_bottom">
                    <p className="f_exo">Choose a Genre</p>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="home_header_down_icon"
                        onClick={moveToNext}
                    />
                </div>
            </div>
            <div className="genre_list_container">
                <div className="genre_list_header">
                    <p className="f_saira">What would you like to read ?</p>
                </div>
                <div className="genre_list">
                    <Link
                        className="link genre_card genre_card_thriller"
                        to={{
                            pathname: "/books",
                            optionSelected: "thriller",
                        }}
                    >
                        <span>Thriller</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_crime"
                        to={{
                            pathname: "/books",
                            optionSelected: "crime",
                        }}
                    >
                        <span>Crime</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_romance"
                        to={{
                            pathname: "/books",
                            optionSelected: "romance",
                        }}
                    >
                        <span>Romance</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_suspense"
                        to={{
                            pathname: "/books",
                            optionSelected: "suspense",
                        }}
                    >
                        <span>Suspense</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_horror"
                        to={{
                            pathname: "/books",
                            optionSelected: "horror",
                        }}
                    >
                        <span>Horror</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_kids"
                        to={{
                            pathname: "/books",
                            optionSelected: "kids",
                        }}
                    >
                        <span>Kids</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_comedy"
                        to={{
                            pathname: "/books",
                            optionSelected: "comedy",
                        }}
                    >
                        <span>Comedy</span>
                    </Link>
                    <Link
                        className="link genre_card genre_card_action"
                        to={{
                            pathname: "/books",
                            optionSelected: "action",
                        }}
                    >
                        <span>Action</span>
                    </Link>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
