import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import Footer from "../Footer/Footer";
import AddNav from "../../hoc/withNav";
import "./AddBook.css";

function AddBook() {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        document.title = "AddBook | Bookish";

        if (!user) {
            history.push("/");
            return;
        }

        document.getElementById("book_file_input").addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0])
                document.getElementById("book_name").innerHTML = e.target.files[0].name;
        });

        document.getElementById("book_image_input").addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0])
                document.getElementById("img_name").innerHTML = e.target.files[0].name;
        });

    }, [history, user]);

    const handleAddClick = (e) => {
        e.preventDefault();

        if (!document.getElementById("book_file_input").files.length) {
            toast.error("No file included!");
            return;
        }

        let checkvals = [];
        Array.from(e.target.genre).forEach((gen) => {
            if (gen.checked) {
                checkvals.push(gen.value);
            }
        });

        const formData = new FormData();
        formData.append("book_image_input", e.target.book_image_input.files[0]);
        formData.append("book_file_input", e.target.book_file_input.files[0]);
        formData.append("book_name_input", e.target.book_name_input.value);
        formData.append("book_author_input", e.target.book_author_input.value);

        if (checkvals.length) formData.append("genre", checkvals);

        const url = "/addbook";
        try {
            axios
                .post(url, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    if (res.data.status === "success") {
                        toast.success(res.data.message);
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log("Error in axios post request!");
                    console.log(err);
                });
        } catch (err) {
            console.log("Error in axios request in AddBook.js");
            console.log(err);
        }
    };

    return (
        <div className="addbook_container container">
            <header>___ Your book adds value! ___</header>
            <form
                className="add_update_form addbook_form f_exo"
                encType="multipart/form-data"
                onSubmit={handleAddClick}
            >
                <div className="flex_bet">
                    <div className="flex_cent">
                        <label htmlFor="book_file_input">
                            <div className="input_label pointer">
                                <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                                Upload Book
                            </div>
                            <div className="input_file_name" id="book_name"></div>
                        </label>
                        <input
                            type="file"
                            id="book_file_input"
                            className="add_update_file_input"
                            name="book_file_input"
                            required
                        />
                    </div>
                    <div className="flex_cent">
                        <label htmlFor="book_image_input">
                            <div className="input_label pointer">
                                <FontAwesomeIcon icon={faPlusSquare} className="icon" />
                                Upload Book Img
                            </div>
                            <div className="input_file_name" id="img_name"></div>
                        </label>
                        <input
                            type="file"
                            id="book_image_input"
                            className="add_update_file_input"
                            name="book_image_input"
                        />
                    </div>
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
                        required
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
                        required
                    />
                </div>
                <div className="flex_bet">
                    <label>Choose genres</label>
                    <div className="genre_div">
                        <div>
                            <input type="checkbox" id="checkbox_thriller" name="genre" value="thriller" />
                            <label htmlFor="checkbox_thriller">Thriller</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_comedy" name="genre" value="comedy" />
                            <label htmlFor="checkbox_comedy">Comedy</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_kids" name="genre" value="kids" />
                            <label htmlFor="checkbox_kids">Kids</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_romance" name="genre" value="romance" />
                            <label htmlFor="checkbox_romance">Romance</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_suspense" name="genre" value="suspense" />
                            <label htmlFor="checkbox_suspense">Suspense</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_horror" name="genre" value="horror" />
                            <label htmlFor="checkbox_horror">Horror</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_crime" name="genre" value="crime" />
                            <label htmlFor="checkbox_crime">Crime</label>
                        </div>
                        <div>
                            <input type="checkbox" id="checkbox_action" name="genre" value="action" />
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
