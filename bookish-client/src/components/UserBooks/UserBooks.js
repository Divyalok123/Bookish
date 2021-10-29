import { Component } from 'react';
import BookCard from '../BookCard/BookCard';
import Footer from '../Footer/Footer';
import AddBookCard from '../AddBookCard/AddBookCard';
import './UserBooks.css';


class UserBooks extends Component {
    constructor() {
        super();
        this.state = {
            optionSelected: "all"
        }
    }

    handleGenreChange = (e) => {
        console.log(e.target.value);
        this.setState({
            optionSelected: e.target.value
        });
    }

    render() {
        return (
            <div className="userbooks_container container">
                <div className="userbooks_header">
                    <div className="header_text f_exo">
                        { this.props.page === "mybooks" ? "My Books" : "Favourites" }
                    </div>
                    <div className="userbooks_filter">
                        <select 
                            className="select_genre pointer f_titillium" 
                            value={this.state.optionSelected} 
                            onChange={this.handleGenreChange}>
                            <option value="all">All</option> 
                            <option value="thriller">Thriller</option>
                            <option value="crime">Crime</option>
                            <option value="romance">Romance</option>
                            <option value="suspense">Suspense</option>
                            <option value="horror">Horror</option>
                            <option value="action">Action</option>
                            <option value="kids">Kids</option>
                            <option value="comedy">Comedy</option>
                        </select>
                    </div>
                </div>
                <div className="userbooks_list">
                    { this.props.page === "mybooks" ? <AddBookCard /> : ""}
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
                <Footer />
            </div>
        )  
    }
}

export default UserBooks;