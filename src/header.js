import React from "react"
import './style.scss';

export default class Header extends React.Component {
    render() {
        return (
            <>
            <header className="header_grid">
                <div id="header_box1">1</div>
                <div id="header_box2">2</div>
                <div id="header_box3">3</div>
            </header>
            </>
        )
    }
}