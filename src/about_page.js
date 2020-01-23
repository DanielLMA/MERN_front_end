import React from "react"
import './style.scss';
import Header2 from "./header2.js"

export default class AboutPage extends React.Component {
    render() {
        return (
            <>
            <body>
            <Header2/>
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./haircut_pic.jpg') + ')'}}
                >
                <h1>content </h1>
                </div>
            </body>
            </>
        )
    }
}