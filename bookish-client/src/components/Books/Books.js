import { Component } from "react";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import BookCard from "../BookCard/BookCard";
import Footer from "../Footer/Footer";
import dummyBookImg2 from "../../assets/dummyBookImg2.jpg";
import "./Books.css";
import AddNav from "../../hoc/withNav";

class Books extends Component {
    componentDidMount() {
        document.title = "Books | Bookish";
    }

    render() {
        let currbooks = [];
        for (let i = 0; i < 8; i++) {
            currbooks.push(
                <BookCard
                    imgsrc={dummyBookImg2}
                    name="One Piece"
                    author="Echiro Oda"
                    genre="Action, Comedy"
                    key={i}
                />
            );
        }
        return (
            <div className="books_container container">
                <ComponentHeader page="books" optionSelected={this.props.location.optionSelected} />
                <div className="books_list">{currbooks}</div>
                <Footer />
            </div>
        );
    }
}

export default AddNav(Books);
