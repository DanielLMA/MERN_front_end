import React from "react"
import './style.scss';
import Header2 from "./header2.js"
import {Image, CloudinaryContext, Transformation } from 'cloudinary-react'

export default class GalleryPage extends React.Component {
    render() {
        return (
            <>
            <Header2/>
            <CloudinaryContext cloudName="dadewebdev">
                    <Image publicId="dfpeAG4E86f3GX33Nm3yEBFN">
                        <Transformation width="200" crop="scale" angle="10"/>
                    </Image>
            </CloudinaryContext>
            {/* <Image cloudName="dadewebdev" publicId="dfpeAG4E86f3GX33Nm3yEBFN" width="200" crop="scale"/> */}
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./haircut_pic.jpg') + ')'}}
                >
                    <div className="content">
                    <h1>Gallery</h1>
                    <p>WAITING FOR PICTURES FROM CLIENT</p> 
                    </div>

                </div>
            </> 
        )
    }
}