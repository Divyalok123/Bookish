import { useEffect } from "react";
import { toast } from "react-toastify";
import Registration from "../Registration/Registration";

function SignUp(props) {
    useEffect(() => {
        document.title = "Sign Up | Bookish";

        if(props.location.state) {
            var {message, status} = props.location.state;

            if(status === "success")
                toast.success(message);
            else
                toast.error(message);
        }   
    }, [props])

    return (
        <Registration page="signup" />
    )   
}

export default SignUp;