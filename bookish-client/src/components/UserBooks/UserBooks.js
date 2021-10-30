import { Component } from 'react';
import BookCard from '../BookCard/BookCard';
import Footer from '../Footer/Footer';
import AddBookCard from '../AddBookCard/AddBookCard';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import './UserBooks.css';


class UserBooks extends Component {
    render() {
        return (
            <div className="userbooks_container container">
                <ComponentHeader page={this.props.page} />
                <div className="userbooks_list">
                    { this.props.page === "mybooks" ? <AddBookCard /> : ""}
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