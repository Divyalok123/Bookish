import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import AddNav from "../../hoc/withNav";
import Registration from "../Registration/Registration";

function Login(props) {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        document.title = "Login | Bookish";

        if (user) {
            history.push("/");
            return;
        }

        if (props.location.state) {
            var { message, status } = props.location.state;

            if (status === "success") toast.success(message);
            else toast.error(message);
        }
    }, [props, user, history]);

    return <Registration page="signin" />;
}

export default AddNav(Login);
