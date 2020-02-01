import React from "react"
import Header2 from "./../header2.js"

export default class ServicesPage extends React.Component {
    render() {
        return (
            <>
            <Header2/>
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./images/haircut_pic.jpg') + ')'}}
                >
                    <div className="content">
                    <h1>Services</h1>
                    <p>WAITING FOR INFO FROM CLIENT</p> 
                    </div>

                </div>
            </>
        )
    }
}