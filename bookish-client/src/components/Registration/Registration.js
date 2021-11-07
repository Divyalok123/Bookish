import { Component } from 'react';
import './Registration.css';

class Registration extends Component {
    render() {
        return (
            <div className="login_container container">
                <div id="reg_box">
                    <div id="reg_form">
                        <div className="title f_exo">
                            {this.props.page === "signin" ? "Have fun!" : "Create your account"}
                        </div>
                        <div className="subtitle f_exo">
                            <p>“Sleep is good, he said, and books are better.”</p>
                            <p>― George R. R. Martin</p>
                        </div>
                        { this.props.page === "signin" ? "" :
                            <div className="input_container name_input_container">
                                <div className="name_input">
                                    <input id="firstname" className="input f_yaldevi" type="text" placeholder=" " />
                                    <label for="firstname" className="placeholder f_titillium">First name</label>
                                </div>
                                <div className="name_input">
                                    <input id="lastname" className="input f_yaldevi" type="text" placeholder=" " />
                                    <label for="lastname" className="placeholder f_titillium">Last name</label>
                                </div>
                            </div>
                        }   
                        <div className="input_container">
                            <input id="email" className="input f_yaldevi" type="email" placeholder=" " />
                            <label for="email" className="placeholder f_titillium">Email</label>
                        </div>
                        <div className="input_container">
                            <input id="password" className="input f_yaldevi" type="password" placeholder=" " />
                            <label for="password" className="placeholder f_titillium">Password</label>
                        </div>
                        { this.props.page === "signin" ? "" :
                            <div className="input_container">
                                <input id="confirm" className="input f_yaldevi" type="password" placeholder=" " />
                                <label for="confirm" className="placeholder f_titillium">Confirm Password</label>
                            </div>
                        }
                        
                        <button type="submit" className="submit pointer f_exo">
                            { this.props.page === "signin" ? "Log In" : "Sign Up"}
                        </button>
                    </div>
                    <div id="reg_footer" className="f_gemunu">
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;