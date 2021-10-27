import {Component} from 'react';
import logoImg from "../../assets/full_logo.png"
import dummyProfileImg from "../../assets/dummy_person.png"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={logoImg} alt="logo" className="navleft" />
                <div className="navright">
                    <button className="f_lato">About</button>
                    <button className="f_lato">Books</button>
                    <button className="f_lato">Authors</button>
                    {/* If not logged in */}
                    <button className="f_nato_sans opp_nav_button">Login</button>
                    {/* Else */ }
                    <img src={dummyProfileImg} alt="nav_profile_img" className="nav_profile_img" />
                </div>
            </div>
        )
    }
}

export default Navbar;