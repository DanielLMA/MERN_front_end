import React from "react"
import './style.scss';
import HomePage from "./home_page.js"
import { Link } from "react-router-dom";
import Header2 from "./home_page.js"

export default class AboutPage extends React.Component {
    render() {
        return (
            <>
     
            <body>
            <Header2/>
                <div className="container-about">
                </div>
            </body>
            </>
        )
    }
}