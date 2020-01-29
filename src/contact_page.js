import React from "react"
import './style.scss';
import Header2 from "./header2.js"
import ContactForm from "./contact_form.js"

export default class ContactPage extends React.Component {
    render() {
        return (
            <>
            <body>
            <div className="content" >

            <div className="content" >            
            <Header2/>                
            <h1>Contact Us</h1> 
                <ContactForm/>
            </div>

            </body>
            </>
        )
    }
}