import React from "react"
import Header2 from "./../header2.js"
import ContactForm from "./contact_form.js"
import FooterPage from "./footer.js"


export default class ContactPage extends React.Component {
    render() {
        return (
            <>
            <Header2/>                

            <div className="contact-content" >            
            <h1>Contact Us</h1> 
                <ContactForm/>
                <FooterPage/>

            </div>
       
            </>
        )
    }
}