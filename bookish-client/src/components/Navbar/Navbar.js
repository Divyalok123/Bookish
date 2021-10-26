import {Component} from 'react';
import img from "../../assets/full_logo.png"
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={img} alt="logo" className="navleft" />
                <div className="navright">
                    <button className="f_lato">Button1</button>
                    <button className="f_lato">Button2</button>
                    <button className="f_lato">Button3</button>
                    <button className="f_lato">Button4</button>
                    <div>
                        <img />
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;