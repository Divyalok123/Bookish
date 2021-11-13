import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../Footer/Footer";
import AddNav from "../../hoc/withNav";
import "./AddBook.css";

function AddBook() {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        document.title = "AddBook | Bookish";

        console.log(user);

        if (!user) {
            history.push("/");
            return;
        }

        document.getElementById("book_file_input").addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0])
                document.getElementById("book_name").innerHTML = e.target.files[0].name;
        });
    }, [history, user]);

    const handleAddClick = (e) => {};

    return (
        <div className="addbook_container container">
            <header>___ Your book adds value! ___</header>
            <form
                className="add_update_form addbook_form f_exo"
                encType="multipart/form-data"
                onSubmit={handleAddClick}
            >
                <div className="addbook_file_div flex_cent">
                    <label htmlFor="book_file_input">
                        <div id="book_input_label" className="input_label pointer">
                            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                            Upload Book
                        </div>
                        <div class="input_file_name" id="book_name"></div>
                    </label>
                    <input
                        type="file"
                        id="book_file_input"
                        className="add_update_file_input"
                        name="book_file_input"
                    />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>Book Name</div>
                    </label>
                    <input
                        type="text"
                        id="book_name_input"
                        className="text_input f_lato"
                        name="book_name_input"
                    />
                </div>
                <div className="flex_bet">
                    <label>
                        <div>Book Author</div>
                    </label>
                    <input
                        type="text"
                        id="book_author_input"
                        className="text_input f_lato"
                        name="book_author_input"
                    />
                </div>
                <div className="flex_bet">
                    <label>Choose genres</label>
                    <div className="genre_div">
                        <div>
                            <input type="checkbox" id="checkbox_thriller" name="genre" />
                            <label htmlFor="checkbox_thriller">Thriller</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_comedy" name="genre" />
                            <label htmlFor="checkbox_comedy">Comedy</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_kids" name="genre" />
                            <label htmlFor="checkbox_kids">Kids</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_romance" name="genre" />
                            <label htmlFor="checkbox_romance">Romance</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_suspense" name="genre" />
                            <label htmlFor="checkbox_suspense">Suspense</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_horror" name="genre" />
                            <label htmlFor="checkbox_horror">Horror</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_crime" name="genre" />
                            <label htmlFor="checkbox_crime">Crime</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_action" name="genre" />
                            <label htmlFor="checkbox_action">Action</label>
                        </div>
                    </div>
                </div>
                <div className="form_submit flex_cent">
                    <button className="f_exo" type="submit">
                        Add Book
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default AddNav(AddBook);
