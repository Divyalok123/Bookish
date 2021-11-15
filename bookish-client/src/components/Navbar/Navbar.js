import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/full_logo.png";
import dummyProfileImg from "../../assets/dummyPerson.png";
import { AuthContext } from "../../context/AuthContext";
import { LogOut } from "../../context/AuthActions";
import "./Navbar.css";
import { toast } from "react-toastify";

class Navbar extends Component {
    profileClickCount = 0;
    static contextType = AuthContext;

    constructor() {
        super();
        this.dropdownRef = React.createRef();
        this.state = {
            isLoggedIn: 0,
        };
    }

    componentDidMount() {
        if(!this.state.isLoggedIn && this.context.user) {
            this.setState({
                isLoggedIn: 1
            })
        }
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        if(this.state.isLoggedIn && !this.context.user) {
            this.setState({
                isLoggedIn: 0
            })
        }
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleProfileImageClick = () => {
        let ele = document.getElementsByClassName("nav_profile_dropdown")[0];
        if (this.profileClickCount) {
            ele.style.display = "none";
            this.profileClickCount = 0;
        } else {
            ele.style.display = "block";
            this.profileClickCount = 1;
        }
    }

    handleClickOutside = (e) => {
        if (
            document.getElementsByClassName("nav_profile_img")[0] &&
            !document.getElementsByClassName("nav_profile_img")[0].contains(e.target) &&
            this.dropdownRef &&
            this.dropdownRef.current &&
            !this.dropdownRef.current.contains(e.target)
        ) {
            this.profileClickCount = 0;
            document.getElementsByClassName("nav_profile_dropdown")[0].style.display = "none";
        }
    }

    handleLogout = (e) => {
        this.context.dispatch(LogOut());
        toast.success("Logged out successfully!");
        localStorage.clear();
        this.setState({
            isLoggedIn: 0
        })
    }

    render() {
        const PF = process.env.REACT_APP_PROXY_URL;
        const  { user } = this.context;
        return (
            <div className="navbar">
                <Link className="navleft" to="/">
                    <img src={logoImg} alt="logo" className="navleft_img" />
                </Link>
                <div className="navright">
                    <Link className="link pointer" to="/about">
                        <button className="f_lato pointer nav_button">About</button>
                    </Link>
                    <Link className="link pointer" to="/books">
                        <button className="f_lato pointer nav_button">Books</button>
                    </Link>

                    {!this.state.isLoggedIn ? (
                        <div>
                            <Link className="link pointer" to="/signin">
                                <button className="f_lato pointer opp_nav_button nav_login_button">
                                    Login
                                </button>
                            </Link>
                            <Link className="link pointer" to="/signup">
                                <button className="f_lato pointer opp_nav_button nav_signup_button">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="nav_profile_container">
                            <img
                                src={user.avatar ? PF + user.avatar : dummyProfileImg}
                                alt="nav_profile_img"
                                className="nav_profile_img"
                                onClick={this.handleProfileImageClick}
                            />
                            <div className="nav_profile_dropdown f_exo" ref={this.dropdownRef}>
                                <div className="upward_arrow"></div>
                                <Link className="link" to="/profile">
                                    <div className="nav_dropdown_item">Profile</div>
                                </Link>
                                <Link className="link" to="/mybooks">
                                    <div className="nav_dropdown_item">My Books</div>
                                </Link>
                                <Link className="link" to="/addbook">
                                    <div className="nav_dropdown_item">Add Book</div>
                                </Link>
                                <Link className="link" to="/favourites">
                                    <div className="nav_dropdown_item">Favourites</div>
                                </Link>
                                <Link className="link" to="/updateprofile">
                                    <div className="nav_dropdown_item">Update Profile</div>
                                </Link>
                                <div className="nav_dropdown_item" onClick={this.handleLogout}>Logout</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Navbar;
