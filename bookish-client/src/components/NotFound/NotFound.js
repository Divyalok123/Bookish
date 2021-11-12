import { Link } from 'react-router-dom';

function NotFound() {
    let NotFoundStyles = {
        width: "100%",
        textAlign: "center",
        fontSize: "40px",
        padding: "20px 0"
    }

    let NotFoundHomeButton = {
        fontSize: "18px",
        padding: "10px 20px",
        cursor: "pointer",
        marginTop: "19px",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "whitesmoke"
    }

    return (
        <div style={NotFoundStyles}>
            <span>
                Url Not Found!
            </span>
            <br/>
            <Link to="/" className="link">
                <button style={NotFoundHomeButton}>Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFound;