import React from "react"
// import Header2 from "./../header2.js"
import {Image, CloudinaryContext} from 'cloudinary-react'
import axios from "axios"
// import base64 from "base-64"
import FooterPage from "./footer.js"
import Header from "../header.js"
import "./gallery.scss"


export default class GalleryPage extends React.Component {
    constructor() {
        super()
        this.state = {
            gallery: []
            //will run into problem later of gallery not undefined. need to below do gallery && in the CloudinaryContext? 
        }
    }
    componentDidMount() {
        // axios.get('https://res.cloudinary.com/dadewebdev/image/fetch/raw_barbershop.json')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }

    componentWillMount() { 
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
        axios({
            url: 'http://localhost:5000/uploadingToGallery/getImages',

            method: 'GET',
        }).then(res => {
            this.setState({ gallery: res.data})
        }).catch(console.log)
    }

    uploadWidget() {
        window.cloudinary.openUploadWidget({
            cloudName: 'dadewebdev',
            uploadPreset: 'wq6lajqj',
            tags: ['raw_barbershop']
        }, (error, result) => {
            if(result&&result.event=='success'){
                this.postImages({
                    imageName: result.info.original_filename,
                    imageData: result.info.secure_url,
                    imagePath: result.info.path,
                    slug: result.info.path
                })
            }
            if (error) console.log(error)
        });
    }
    
    postImages(result){
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
        axios({
            url: 'http://localhost:5000/uploadingToGallery/postImage',
            method: 'POST',
            data: result
        }).then(res => {
            console.log(res);
        }).catch(console.log);
    }

    updateImages(result,id){
        const config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
        axios({
            url: 'http://localhost:5000/uploadingToGallery/updateImage/${id}',
            method: 'PUT',
            data: result
        }).then(res => {
            console.log(res);
        }).catch(console.log);
    }

    deleteImage(){
        // console.log(cloudinary);
        // axios({
        //     url:'https://res.cloudinary.com/dadewebdev/image/upload/v1580715877/xt1yswwcdgzi6zeu4xxu.jpg',
        //     method: 'REMOVE'}).then(res => {
        //     console.log(res);
        // }).catch(console.log);
        axios.delete('http://res.cloudinary.com/dadewebdev/image/upload/v1580715877/xt1yswwcdgzi6zeu4xxu',{
            headers: {'Access-Control-Allow-Origin': '*'}
        }).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        // axios({
        //     url: 'http://res.cloudinary.com/dadewebdev/image/upload/v1580730889/yux0avbq37qrq2rth8xh.jpg',
        //     method: 'DELETE',
        // }).then(res => {
        //     console.log(res);
        // }).catch(console.log);


        // axios({
        //     url: 'http://localhost:5000/uploadingToGallery/deleteImage/${id}',
        //     method: 'DELETE',
        // }).then(res => {
        //     console.log(res);
        // }).catch(console.log);
    }

    render() {

        return (
            <>
            {/* <Header2/> */}
           
            <div className="gallery-container">
                    <div className="gallery-content">
                    <h1>Photo Gallery</h1>
                    <br/>
                    <CloudinaryContext cloudName="dadewebdev" className="cloud-grid">
                    {this.state.gallery.map(photo => (
                        <a href="https://www.instagram.com/raw.barbershop/" >
                    <Image publicId={photo.slug} crop="scale" className="image" />
                    </a>
                    ))}
                   
                    </CloudinaryContext>   
                    <button onClick={this.uploadWidget.bind(this)}>
                        <h2>Upload Image</h2>
                    </button>

                </div>

                </div>
                <FooterPage/>
            </> 
        )
    }
}



// buttons for crud
// render() {  return (    
// <div>      
//     <form onSubmit={this.onSubmitHandle.bind(this)}>        
//     <input type="string" name="imageName"  />        
//     <button className="btn-add-item">Add</button>      
//     </form>     
//      <ul>        
//      {this.state.gallery.map(item => (          
//         <li key={item.id}>            
//             {item.title}            
//             <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>            
//             <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>            
//             <button onClick={this.onCompleteHandle}>Complete</button>          
//         </li>        ))}     
//       </ul>    
// </div>  
//       );}