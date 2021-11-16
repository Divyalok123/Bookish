import { useEffect, useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import BookCard from "../BookCard/BookCard";
import Footer from "../Footer/Footer";
import AddNav from "../../hoc/withNav";
import AddBookCard from "../AddBookCard/AddBookCard";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import Loader from "../Loader/Loader";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./UserBooks.css";

function UserBooks(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [allBooks, setAllBooks] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = props.page === "mybooks" ? "Your Books | Bookish" : "Favourites | Bookish";

        const url = props.page === "mybooks" ? "/getuserbooks" : "/getfavourites";

        axios
            .get(url, {
                params: {
                    userid: user._id,
                },
            })
            .then((res) => {
                // console.log("Data (UserBooks.js): ", res.data);
                setAllBooks(res.data.userBooks);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Erro in axios request in UserBooks.js!");
                console.log(err);
            });
    }, [props, user]);

    if (!user) {
        return <Redirect to="/" />;
    }

    if (isLoading) {
        return (
            <Loader
                loaderText={
                    props.page === "mybooks" ? "Loading your books..." : "Getting your favourite books..."
                }
            />
        );
    }

    let currbooks = [];

    allBooks.sort((a, b) => {
        a = new Date(a.createdAt);
        b = new Date(b.createdAt);
        return b-a;
    })

    for (let i = 0; i < allBooks.length; i++) {
        const currBook = allBooks[i];
        currbooks.push(<BookCard bookDetails={currBook} key={uuidv4()} />);
    }

    return (
        <div className="userbooks_container container">
            <ComponentHeader page={props.page} />
            <div className="userbooks_list">
                {props.page === "mybooks" ? (
                    <Link to="/addbook" className="link">
                        <AddBookCard />
                    </Link>
                ) : (
                    ""
                )}

                {currbooks}

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

export default AddNav(UserBooks);
