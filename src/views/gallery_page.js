import React from "react"
// import Header2 from "./../header2.js"
import {Image, CloudinaryContext} from 'cloudinary-react'
import axios from "axios"
// import base64 from "base-64"

export default class GalleryPage extends React.Component {
    constructor() {
        super()
        this.state = {
            gallery: []
            //will run into problem later of gallery not undefined. need to below do gallery && in the CloudinaryContext? 
        }
    }
    componentDidMount() {
        // const config = {
        //     headers: {'Access-Control-Allow-Origin': '*'}
        // }
        axios({
            url: 'http://localhost:5000/images',
            method: 'GET',
            // headers: {
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
                // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
                // 'Accept': 'application/x-www-form-urlencoded',
                // 'Content-Type':'application/x-www-form-urlencoded'
            // }.
        }).then(res => {
            this.setState({ gallery: res.data})
        })
            
            .catch(console.log)

//         fetch('https://res.cloudinary.com/dadewebdev/image/list/raw_barbershop.json', {
//   method: 'get',
//   headers: {
//     'Authorization': 'Basic ' + base64.encode("591787363579589" + ":" + "t0Lt5nA7LvI_3PUf6I0FibVqPl4"),
//   },
// }).then(res => res.json())
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
   
            
                    {/* </Image> */}
            {/* <Image cloudName="dadewebdev" publicId="dfpeAG4E86f3GX33Nm3yEBFN" width="200" crop="scale"/> */}
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./images/haircut_pic.jpg') + ')'}}
                >
                    <div className="content">
                    <h1>Gallery</h1>
                    <button
                        onClick={this.uploadWidget.bind(this)}
                    >Upload Image</button>
                    <p>Gallery</p> 
                    <CloudinaryContext cloudName="dadewebdev">
            {this.state.gallery.map(photo => (
                <Image publicId={photo.slug} width="200" crop="scale" />
                // <Transformation width="200" crop="scale" angle="10"/>
                        

            ))}
            </CloudinaryContext>   
                    </div>

                </div>
            </> 
        )
    }
}