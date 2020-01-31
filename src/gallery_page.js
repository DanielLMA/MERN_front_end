import React from "react"
import './style.scss';
// import Header2 from "./header2.js"
import {Image, CloudinaryContext, Transformation } from 'cloudinary-react'
import axios from "axios"

export default class GalleryPage extends React.Component {
    constructor() {
        super()
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
        axios.get('https://res.cloudinary.com/dadewebdev/image/list/raw_barbershop.json')
            .then(res => console.log(res.data))
            .catch(console.log)
    }
    uploadWidget() {
        window.cloudinary.openUploadWidget({
            cloudName: 'dadewebdev',
            uploadPreset: 'wq6lajqj',
            tags: ['raw_barbershop']
        }, (error, result) => {
            //console.log(result);
            if (error) console.log(error)
        });
    }
    
    render() {
        return (
            <>
            {/* <Header2/> */}
            
            <CloudinaryContext cloudName="dadewebdev">
                    <Image>
                        <Transformation width="200" crop="scale" angle="10"/>
                    </Image>
            </CloudinaryContext>
            {/* <Image cloudName="dadewebdev" publicId="dfpeAG4E86f3GX33Nm3yEBFN" width="200" crop="scale"/> */}
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./haircut_pic.jpg') + ')'}}
                >
                    <div className="content">
                    <h1>Gallery</h1>
                    <button
                        onClick={this.uploadWidget.bind(this)}
                    >Upload Image</button>
                    <p>WAITING FOR PICTURES FROM CLIENT</p> 
                    </div>

                </div>
            </> 
        )
    }
}