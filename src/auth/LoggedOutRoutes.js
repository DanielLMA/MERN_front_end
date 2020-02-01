import React from 'react';
import { Link } from "react-router-dom";

const LoggedOutRoutes = (userAuth) => {
    return (
        <React.Fragment>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </React.Fragment>
    )
}

export default LoggedOutRoutes