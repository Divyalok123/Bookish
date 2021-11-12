import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router'; 
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import "./Registration.css";

function Registration(props) {
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
    
        let firstname = e.target.firstname && e.target.firstname.value;
        let lastname = e.target.lastname && e.target.lastname.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirm = e.target.confirm && e.target.confirm.value;
    
        let data = {firstname, lastname, email, password, confirm};
        
        if(props.page !== "signin" && password !== confirm) {
            toast.error("Passwords don't match!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            toast.clearWaitingQueue();
            return;
        }
    
        let url = props.page === "signin" ? "/signin" : "/signup";
        try {
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response.data);
                    alert("Respo nse" + JSON.stringify(response.data));
                    history.push({
                        pathname: "/signin",
                        state: {
                            status: "success",
                            message: "You've signed up! Please signin to continue"    
                        }
                    });
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

    return (
        <div className="login_container container">
            <div id="reg_box">
                <form id="reg_form" onSubmit={handleSubmit}>
                    <div className="title f_exo">
                        {props.page === "signin"
                            ? "Have fun!"
                            : "Create your account"}
                    </div>
                    <div className="subtitle f_exo">
                        <p>
                            “Sleep is good, he said, and books are better.”
                        </p>
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
                        {props.page === "signin"
                            ? "Log In"
                            : "Sign Up"}
                    </button>
                </form>
            </div>
            <ToastContainer 
                limit={5} 
                autoClose={4000}
                draggable
                pauseOnHover
                closeOnClick
                theme="dark"
            />
        </div>
    );
}

export default Registration;

