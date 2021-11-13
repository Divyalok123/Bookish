import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../Footer/Footer";
import AddNav from "../../hoc/withNav";
import "./AddBook.css";

function AddBook() {
    const {user} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        document.title = "AddBook | Bookish";

        console.log(user);

        if(!user) {
            history.push("/");
            return;
        }

        document.getElementById("book_file_input").addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0])
                document.getElementById("book_name").innerHTML = e.target.files[0].name;
        });
    }, [history, user]);

    return (
        <div className="addbook_container container">
            <header>___ Your book adds value! ___</header>
            <div className="addbook_form f_exo">
                <div className="addbook_file_div flex_cent">
                    <label htmlFor="book_file_input">
                        <div id="book_input_label" className="pointer">
                            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                            Upload Book
                        </div>
                        <div id="book_name"></div>
                    </label>
                    <input type="file" id="book_file_input" />
                </div>
                <div className="book_name_div flex_bet">
                    <label>
                        <div>Book Name</div>
                    </label>
                    <input type="text" id="book_name_input" className="f_lato" />
                </div>
                <div className="book_author_div flex_bet">
                    <label>
                        <div>Book Author</div>
                    </label>
                    <input type="text" id="book_author_input" />
                </div>
                <div className="book_genre_div flex_bet">
                    <div>
                        <input type="checkbox" id="checkbox_thriller" />
                        <label htmlFor="checkbox_thriller">Thriller</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_comedy" />
                        <label htmlFor="checkbox_comedy">Comedy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_kids" />
                        <label htmlFor="checkbox_kids">Kids</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_romance" />
                        <label htmlFor="checkbox_romance">Romance</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_suspense" />
                        <label htmlFor="checkbox_suspense">Suspense</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_horror" />
                        <label htmlFor="checkbox_horror">Horror</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_crime" />
                        <label htmlFor="checkbox_crime">Crime</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_action" />
                        <label htmlFor="checkbox_action">Action</label>
                    </div>
                </div>
                <div className="addbook_submit flex_cent">
                    <button className="f_exo">Add Book</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddNav(AddBook);
