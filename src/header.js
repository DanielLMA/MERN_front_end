import React from "react"
import './style.scss';
import logo from "./raw_logo_black.png"

export default class Header extends React.Component {
    render() {
        return (
            <>
            <header className="header_grid">
                <div id="header_box1">1</div>
                <div id="header_box2"><img src={logo} alt="raw_logo" /></div>
                <div id="header_box3">3</div>
            </header>
            </>
        )
    }
}