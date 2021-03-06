import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import AddNav from '../../hoc/withNav';
import Registration from "../Registration/Registration";

function SignUp(props) {
    const {user} = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        document.title = "Sign Up | Bookish";

        if(user) {
            history.push("/");
            return;
        }

        if(props.location.state) {
            var {message, status} = props.location.state;

            if(status === "success")
                toast.success(message);
            else
                toast.error(message);
        }   
    }, [props, user, history])

    return (
        <Registration page="signup" />
    )   
}

export default AddNav(SignUp);