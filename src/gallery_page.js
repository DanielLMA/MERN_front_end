import React from "react"
import './style.scss';
import Header2 from "./header2.js"


export default class GalleryPage extends React.Component {
    render() {
        return (
            <>
            <Header2/>
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./haircut_pic.jpg') + ')'}}
                >
                    <div class="content">
                    <h1>Services</h1>
                    <p>WAITING FOR PICTURES FROM CLIENT</p> 
                    </div>

                </div>
            </> 
        )
    }
}