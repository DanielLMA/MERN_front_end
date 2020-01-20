import React from "react"
import './style.scss';

export default class Header2 extends React.Component {
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
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Bios</a></li>
                                    <li><a href="#">Other</a></li>
                                </ul>
                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="content">
                        <h1>Welcome</h1>
                        <p>Lorem stuff stuff stuff stuff </p>
                        <a href="#" className="btn">Read More</a>
                    </div>
                </div>
                </body>
            </>
        )
    }
}