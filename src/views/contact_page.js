import React from "react"
import Header2 from "./../header2.js"
import ContactForm from "./contact_form.js"
import FooterPage from "./footer.js"


export default class ContactPage extends React.Component {
    render() {
        return (
            <>

            <div className="content" >            
            <Header2/>                
            <h1>Contact Us</h1> 
                <ContactForm/>
            </div>
       
            <FooterPage/>
            </>
        )
    }
}