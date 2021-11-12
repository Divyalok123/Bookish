import { Component } from "react";
import axios from "axios";
import "./Registration.css";

class Registration extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title =
            this.props.page === "signin"
                ? "Log In | Bookish"
                : "Sign Up | Bookish";
    }

    componentDidUpdate() {
        document.title =
            this.props.page === "signin"
                ? "Log In | Bookish"
                : "Sign Up | Bookish";
    }

    async handleSubmit(e) {
        e.preventDefault();

        let data = {
            firstname: e.target.firstname && e.target.firstname.value,
            lastname: e.target.lastname && e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirm: e.target.confirm && e.target.confirm.value,
        };

        let url = this.props.page === "signin" ? "/signin" : "/signup";
        try {
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response.data);
                    alert("Response" + JSON.stringify(response.data));
                })
                .catch((err) => {
                    console.log(
                        "Error in axios post request from Registration Component"
                    );
                    console.log(err);
                });
        } catch (err) {
            console.log("Error in axios call from Registration Component!");
            console.log(err);
        }
    }

    render() {
        return (
            <div className="login_container container">
                <div id="reg_box">
                    <form id="reg_form" onSubmit={this.handleSubmit}>
                        <div className="title f_exo">
                            {this.props.page === "signin"
                                ? "Have fun!"
                                : "Create your account"}
                        </div>
                        <div className="subtitle f_exo">
                            <p>
                                “Sleep is good, he said, and books are better.”
                            </p>
                            <p>― George R. R. Martin</p>
                        </div>
                        {this.props.page === "signin" ? (
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
                                    <label
                                        for="firstname"
                                        className="placeholder f_titillium"
                                    >
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
                                    <label
                                        for="lastname"
                                        className="placeholder f_titillium"
                                    >
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
                            <label
                                for="email"
                                className="placeholder f_titillium"
                            >
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
                            <label
                                for="password"
                                className="placeholder f_titillium"
                            >
                                Password
                            </label>
                        </div>
                        {this.props.page === "signin" ? (
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
                                    <label
                                        for="confirm"
                                        className="placeholder f_titillium"
                                    >
                                        Confirm Password
                                    </label>
                                </div>
                            </>
                        )}

                        <button type="submit" className="submit pointer f_exo">
                            {this.props.page === "signin"
                                ? "Log In"
                                : "Sign Up"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;

