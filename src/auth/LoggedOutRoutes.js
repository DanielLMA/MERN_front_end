import React from 'react';
import { Link } from "react-router-dom";

const LoggedOutRoutes = (userAuth) => {
    return (
        <React.Fragment>
            <li>
                <Link className="link"  to="/register">Register</Link>
            </li>
            <li>
                <Link className="link" to="/login">Login</Link>
            </li>
        </React.Fragment>
    )
}

export default LoggedOutRoutes