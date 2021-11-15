import { useContext } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { LoginSuccess } from "../../context/AuthActions";
import "react-toastify/dist/ReactToastify.css";
import "./Registration.css";

function Registration(props) {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        let firstname = e.target.firstname && e.target.firstname.value;
        let lastname = e.target.lastname && e.target.lastname.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirm = e.target.confirm && e.target.confirm.value;

        let data = { firstname, lastname, email, password, confirm };

        if (props.page !== "signin" && password !== confirm) {
            toast.error("Passwords don't match!");
            toast.clearWaitingQueue();
            return;
        }

        let url = props.page === "signin" ? "/signin" : "/signup";
        try {
            axios
                .post(url, data)
                .then((response) => {
                    // console.log("Data from registration.js: ", response.data);
                    const { status, message } = response.data;
                    if (status === "error") {
                        toast.error(message);
                        return;
                    }

                    if (props.page === "signup") {
                        history.push({
                            pathname: "/signin",
                            state: {
                                status,
                                message,
                            },
                        });
                    } else {
                        const { user } = response.data;
                        dispatch(LoginSuccess(user));
                        history.push({
                            pathname: "/",
                            state: {
                                status,
                                message,
                            },
                        });
                    }
                })
                .catch((err) => {
                    console.log("Error in axios post request from Registration Component");
                    throw err;
                });
        } catch (err) {
            console.log("Error in axios call from Registration Component!");
            throw err;
        }
    }

    const bottomButtonStyles = { 
        border: "1px solid black", 
        marginLeft: "5px", 
        padding: "2px 4px" 
    };

    return (
        <div className="login_container container">
            <div id="reg_box">
                <form id="reg_form" onSubmit={handleSubmit}>
                    <div className="title f_exo">
                        {props.page === "signin" ? "Have fun!" : "Create your account"}
                    </div>
                    <div className="subtitle f_exo">
                        <p>“Sleep is good, he said, and books are better.”</p>
                        <p>― George R. R. Martin</p>
                    </div>
                    {props.page === "signin" ? (
                        ""
                    ) : (
                        <div className="input_container name_input_container">
                            <div className="name_input">
                                <input
                                    id="firstname"
                                    name="firstname"
                                    className="input f_yaldevi"
                                    type="text"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="firstname" className="placeholder f_titillium">
                                    First name
                                </label>
                            </div>
                            <div className="name_input">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    className="input f_yaldevi"
                                    type="text"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="lastname" className="placeholder f_titillium">
                                    Last name
                                </label>
                            </div>
                        </div>
                    )}
                    <div className="input_container">
                        <input
                            id="email"
                            name="email"
                            className="input f_yaldevi"
                            type="email"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="email" className="placeholder f_titillium">
                            Email
                        </label>
                    </div>
                    <div className="input_container">
                        <input
                            id="password"
                            name="password"
                            className="input f_yaldevi"
                            type="password"
                            placeholder=" "
                            minLength="4"
                            required
                        />
                        <label htmlFor="password" className="placeholder f_titillium">
                            Password
                        </label>
                    </div>
                    {props.page === "signin" ? (
                        ""
                    ) : (
                        <>
                            <div className="input_container">
                                <input
                                    id="confirm"
                                    name="confirm"
                                    className="input f_yaldevi"
                                    type="password"
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="confirm" className="placeholder f_titillium">
                                    Confirm Password
                                </label>
                            </div>
                        </>
                    )}

                    <button type="submit" className="submit pointer f_exo">
                        {props.page === "signin" ? "Log In" : "Sign Up"}
                    </button>
                </form>
                <br />
                <div>
                    <span>
                        {props.page === "signin" ? "Don't have an account?" : "Already have an account?"}
                    </span>
                    &nbsp;
                    <span>
                        {props.page === "signin" ? (
                            <Link to="/signup" className="link" style={bottomButtonStyles}>
                                Sign Up
                            </Link>
                        ) : (
                            <Link to="/signin" className="link" style={bottomButtonStyles}>
                                Log In
                            </Link>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Registration;
