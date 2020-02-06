import React from "react"
import Header from "./../header2.js"
import ContactForm from "./contact_form.js"
import Footer from "./footer.js"
import "./contactPage.scss"


export default class ContactPage extends React.Component {
    render() {
        return (
            <>
            <Header/>
            <div className="contact-content" >  
            <ContactForm/>
            {/* <FooterPage/> */}
            <br /><br />
            <Footer/>
            </div>
            
            </>
        )
    }
}