import { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/full_logo.png';
import dummyProfileImg from '../../assets/dummy_person.png';
import './Navbar.css';

class Navbar extends Component {
    profileClickCount = 0;

    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    handleProfileImageClick = () => {
        let ele = document.getElementsByClassName("nav_profile_dropdown")[0];
        if(this.profileClickCount) {
            ele.style.display = "none";
            this.profileClickCount = 0;
        } else {
            ele.style.display = "block";
            this.profileClickCount = 1;
        }
    }

    render() {
        return ( 
            <div className="navbar">
                <Link className="navleft" to = "/" >
                    <img src={ logoImg }  alt="logo" className="navleft_img" /> 
                </Link> 
                <div className="navright">
                    <Link className="link pointer nav_button" to="/about">
                        <button className="f_lato pointer"> 
                            About
                        </button> 
                    </Link> 
                    <Link className="link pointer nav_button" to="/books">
                        <button className="f_lato pointer">
                            Books
                        </button> 
                    </Link> 
                    
                    {/* { this.state.isLoggedIn ? ( */}
                        <Link className="link pointer" to="/registration">
                            <button className="f_nato_sans opp_nav_button pointer"> 
                                Register
                            </button> 
                        </Link> 
                    {/* ) : ( */}
                        <div className="nav_profile_container" >
                            <img 
                                src={ dummyProfileImg }
                                alt="nav_profile_img"
                                className="nav_profile_img" 
                                onClick={this.handleProfileImageClick}
                            />
                            <div className="nav_profile_dropdown f_exo">
                                <div className="upward_arrow"></div>
                                <Link className="link" to="/profile">
                                    <div className="nav_dropdown_item">
                                        Profile
                                    </div>
                                </Link>
                                <Link className="link" to="/mybooks">
                                    <div className="nav_dropdown_item">
                                        My Books
                                    </div>
                                </Link>
                                <Link className="link" to="/favourites">
                                    <div className="nav_dropdown_item">
                                        Favourites
                                    </div>
                                </Link>
                                <Link className="link" to="/logout">
                                    <div className="nav_dropdown_item">
                                        Logout
                                    </div>
                                </Link>
                            </div>
                        </div> 
                    {/* )} */}
                </div> 
            </div>
        )
    }
}

export default Navbar;