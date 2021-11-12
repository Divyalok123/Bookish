import { useEffect } from 'react';
import { toast } from 'react-toastify';
import AddNav from '../../hoc/withNav';
import Registration from "../Registration/Registration";

function Login(props) {
    useEffect(() => {
        document.title = "Login | Bookish";

        if(props.location.state) {
            var {message, status} = props.location.state;

            if(status === "success")
                toast.success(message);
            else
                toast.error(message);
        }   
    }, [props])
    return (
        <Registration page="signin" />
    )   
}

export default AddNav(Login);