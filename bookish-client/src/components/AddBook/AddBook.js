import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Footer from '../Footer/Footer';
import './AddBook.css';

function AddBook() {
    useEffect(() => {
        document.getElementById("book_file_input").addEventListener("change", (e)=> {
            if(e.target.files && e.target.files[0])   
                document.getElementById("book_name").innerHTML = e.target.files[0].name;
        });
    }, [])

    return (
        <div className="addbook_container container">
            <header>
                ___ Your book adds value! ___
            </header>
            <div className="addbook_form f_exo">
                <div className="addbook_file_div flex_cent">
                    <label for="book_file_input">
                        <div id="book_input_label" className="pointer">
                            <FontAwesomeIcon icon={ faPlusSquare } className="icon" />
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
                    <input type="text" id="book_author_input"/>
                </div>
                <div className="book_genre_div flex_bet">
                    <div>
                        <input type="checkbox" id="checkbox_thriller" />
                        <label for="checkbox_thriller">Thriller</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_comedy" />
                        <label for="checkbox_comedy">Comedy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_kids" />
                        <label for="checkbox_kids">Kids</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_romance" />
                        <label for="checkbox_romance">Romance</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_suspense" />
                        <label for="checkbox_suspense">Suspense</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_horror" />
                        <label for="checkbox_horror">Horror</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_crime" />
                        <label for="checkbox_crime">Crime</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox_action" />
                        <label for="checkbox_action">Action</label>
                    </div>
                </div>
                <div className="addbook_submit flex_cent">
                    <button className="f_exo">Add Book</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddBook;