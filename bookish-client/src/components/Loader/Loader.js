import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './Loader.css';

function Loader(props) {
    return (
        <div className="loader_container">
            <div className="loader_content">
                <FontAwesomeIcon icon={faSpinner} pulse className="loader_icon" />
                <div className="loader_text">
                    {props && props.loaderText ? props.loaderText : ""}
                </div>
            </div>
        </div>
    )
}

export default Loader;