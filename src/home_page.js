import React from "react"
import './style.scss';
import { Link } from "react-router-dom";
import Header from "./header2.js"

export default class HomePage extends React.Component {
    render() {
        return (
            <>
            <body>
                <Header/>
                <div className="container">
                    <div className="content">
                        <h1>Welcome</h1>
                        <Link to="/appointments" className="btn">Book Appointment</Link>
                    </div>
                </div>
                </body>
            </>
        )
    }
}