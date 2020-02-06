import React from "react"
// import Header2 from "./../header2.js"
import {Image, CloudinaryContext, Transformation } from 'cloudinary-react'
import axios from "axios"
const cloudinary = require('cloudinary/lib/cloudinary');

export default class GalleryPage extends React.Component {
    constructor() {
        super()
        this.state = {
            gallery: []
        }
        this.doDelete = false;
        this.initialValue();
    }

    initialValue(){
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.CLOUD_API_KEY , 
            api_secret: process.env.CLOUD_API_SECRET
        });
        this.cloudName = process.env.CLOUD_NAME;
       
        this.uploadPreset = 'j0ppjpkw';
        // this.uploadPreset = 'wq6lajqj';
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
            cloudName: this.cloudName,
            uploadPreset: this.uploadPreset,
            tags: ['raw_barbershop'],
            api_key: '361324184914465', 
            api_secret: 'mNefoSj-2o74M74hhvCXXJ3HQAk'
        }, (error, result) => {
            console.log(result);
            if(result&&result.event=='success'){
                this.postImages({
                    imageName: result.info.original_filename,
                    imageData: result.info.secure_url,
                    imagePublicId: result.info.public_id
                });
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
            if(res.statusText=="OK"&&this.doDelete){
                this.deleteImage(res.data.imagePublicId, res.data._id);
            }
        }).catch(console.log);
    }

    updateImages(publicId, id){
        this.doDelete=true;
        this.uploadWidget();
    }


     deleteImage(publicId, id){
        console.log(cloudinary);
        cloudinary.uploader.destroy(publicId
            ,function(res){
                console.log(res);
                if(res.result=="ok"){
                    axios({
                        url: 'http://localhost:5000/uploadingToGallery/deleteImage/'+id,
                        method: 'DELETE',
                    }).then(res => {
                        console.log(res);
                    }).catch(console.log);
                }
            }
        );
    }

    render() {
        return (
            <>
             {/*<Header2/>*/} 
            <CloudinaryContext cloudName="dadewebdev">
            {this.state.gallery.map(photo => (
                <Image publicId={photo.slug} />
            ))}
            </CloudinaryContext>      
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./images/haircut_pic.jpg') + ')'}}
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