import { Component } from "react";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import BookCard from "../BookCard/BookCard";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import AddNav from "../../hoc/withNav";
import Loader from "../Loader/Loader";
import { v4 as uuidv4} from 'uuid';
import "./Books.css";

class Books extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            allBooks: [],
        };
    }

    componentDidMount() {
        document.title = "Books | Bookish";

        axios
            .get("/getall")
            .then((res) => {
                this.setState({
                    isLoading: false,
                    allBooks: res.data.allBooks,
                });
            })
            .catch((err) => {
                console.log("Error: ", err);
                toast.error("Error fetching books!");
            });
    }

    render() {
        if (this.state.isLoading) {
            return <Loader loaderText="Loading Books" />;
        }

        let currbooks = [];
        const { allBooks } = this.state;

        allBooks.sort((a, b) => {
            a = new Date(a.createdAt);
            b = new Date(b.createdAt);
            return b-a;
        })

        for (let i = 0; i < allBooks.length; i++) {
            const currBook = allBooks[i];
            currbooks.push(
                <BookCard
                    bookDetails={currBook}
                    key={uuidv4()}
                />
            );
        }

        for (let i = 0; i < 8; i++) {
            currbooks.push(
                <BookCard key={uuidv4()}/>
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
