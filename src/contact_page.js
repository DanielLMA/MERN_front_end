import React from "react"
import './style.scss';
import Header2 from "./header2.js"
import ContactForm from "./contact_form.js"

export default class ContactPage extends React.Component {
    render() {
        return (
            <>
            <body>
            
            <div className="contact-container" >
                <ContactForm/>
            </div>
            <Header2/>

            </body>
            </>
        )
    }
}