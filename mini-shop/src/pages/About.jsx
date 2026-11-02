import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h2>About MiniShop</h2>
            <p>
                MiniShop is a small online store built as a React practice project.
                We sell electronics, fashion items, home products and stationery.
            </p>
            <p>
                This app uses React Router for navigation and Redux Toolkit to manage
                the shopping cart.
            </p>
            <Link to="/">← Back to Home</Link>
        </div>
    );
}

export default About;