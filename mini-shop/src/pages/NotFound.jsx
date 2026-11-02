import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="empty">
            <h1>404</h1>
            <p>Oops! This page does not exist.</p>
            <Link to="/">Go back Home</Link>
        </div>
    );
}

export default NotFound;