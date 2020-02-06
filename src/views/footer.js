import React from "react"
import logo from "./images/raw_logo_white.png"
import "./footer.scss"
import { Link } from "react-router-dom";

import LoggedInRoutes from './../auth/LoggedInRoutes'
import LoggedOutRoutes from './../auth/LoggedOutRoutes'

export default class FooterPage extends React.Component {
    // constructor (props) {
    //     super(props)
    // }

    handleLogout() {
        sessionStorage.removeItem('token')
    }

    isLoggedIn() {
      const token = sessionStorage.getItem('token');
      if (token) return true;
    }

    render() {
        const otherLinks = this.isLoggedIn() ? <LoggedInRoutes /> : <LoggedOutRoutes />
        return (
            <>
            <footer>
                <div id="footer-box-1">1</div>
                <div id="footer-box-2"><img src={logo} alt="raw_logo" /></div>
                <div id="footer-box-3">3</div>
                <div id="footer-links">
                    <ul>
                        <li>
                            <Link className="link" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/barbers">Barbers</Link>
                        </li>
                        <li>
                            <Link className="link" to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className="link" to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link className="link" to="/seminars-training">Seminars - Training</Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="link" to="/location">Location</Link>
                        </li>
                        { otherLinks } 
                    </ul>
                </div>
            </footer>
            </>
        )
    }
}