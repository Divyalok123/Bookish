import { Component } from "react";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import BookCard from "../BookCard/BookCard";
import Footer from "../Footer/Footer";
import dummyBookImg2 from "../../assets/dummyBookImg2.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import AddNav from "../../hoc/withNav";
import Loader from "../Loader/Loader";
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
        if(this.state.isLoading) {
            return <Loader loaderText="Loading Books" />
        }

        const PF = process.env.REACT_APP_PROXY_URL;
        let currbooks = [];

        console.log(this.state.allBooks[1].bookimg);

        for (let i = 0; i < 8; i++) {
            currbooks.push(
                <BookCard
                    imgsrc={
                        this.state.allBooks.length
                            ? PF + this.state.allBooks[3].bookimg
                            : dummyBookImg2
                    }
                    name="One Piece"
                    author="Echiro Oda"
                    genre="Action, Comedy"
                    pdflink={
                        this.state.allBooks.length
                            ? PF + this.state.allBooks[3].pdflink
                            : null
                    }
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
