import React from "react"
import './style.scss';
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
    render() {
        return (
            <>
            <body>
                <div className="menu-container">
                    <input type="checkbox" className="toggler"/>
                    <div className="hamburger" >
                        <div></div>
                    </div>
                    <div className="menu">
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/barbers">Barbers</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/appointments">Create Appointment</Link>
                                    </li>
                                    <li>
                                        <Link to="/seminars-training">Seminars - Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/location">Location</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="content">
                        <h1>Welcome</h1>
                        <Link to="/appointments" className="btn">Book Appointment</Link>
                    </div>
                </div> */}
                </body>
            </>
        )
    }
}