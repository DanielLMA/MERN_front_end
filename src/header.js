import React from "react"
import './style.scss';
import logo from "./views/images/raw_logo_black.png"
import "./header.scss"
import { Link } from "react-router-dom";

import LoggedInRoutes from './auth/LoggedInRoutes'
import LoggedOutRoutes from './auth/LoggedOutRoutes'

export default class Header extends React.Component {


    isLoggedIn() {
        const token = sessionStorage.getItem('token');
        if (token) return true;
      }
  

    render() {
        const otherLinks = this.isLoggedIn() ? <LoggedInRoutes /> : <LoggedOutRoutes />
        return (
            <>
            <header className="header_grid">
                <div id="header_box1">1</div>
                <div id="header_box2"><img src={logo} alt="raw_logo" /></div>
                <div id="header_box3">
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
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/location">Location</Link>
                                    </li>
                                    { otherLinks }
                                </ul>
                        </div>
                
                
                </div>
            </header>
            </>
        )
    }
}