import { Component } from "react";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import Footer from "../Footer/Footer";
import AddNav from "../../hoc/withNav";
import AddBookCard from "../AddBookCard/AddBookCard";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import "./UserBooks.css";

class UserBooks extends Component {
    componentDidMount() {
        document.title = this.props.page === "mybooks" ? "Your Books | Bookish" : "Favourites | Bookish";
    }

    componentDidUpdate() {
        document.title = this.props.page === "mybooks" ? "Your Books | Bookish" : "Favourites | Bookish";
    }

    render() {
        return (
            <div className="userbooks_container container">
                <ComponentHeader page={this.props.page} />
                <div className="userbooks_list">
                    {this.props.page === "mybooks" ? (
                        <Link to="/addbook" className="link">
                            <AddBookCard />
                        </Link>
                    ) : (
                        ""
                    )}
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
        );
    }
}

export default AddNav(UserBooks);
