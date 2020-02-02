import React from 'react';
import { Link } from "react-router-dom";

const handleLogout = () => {
    sessionStorage.removeItem('token')
}

const LoggedInRoutes = () => {
    return (
        <React.Fragment>
            <li>
                <Link className="link" to="/appointments">Create Appointment</Link>
            </li>
            <li>
                <Link 
                    className="link" to="/login" 
                    onClick={handleLogout}
                    >
                    Logout
                </Link>
                
            </li>
        </React.Fragment>
    )
}

export default LoggedInRoutes