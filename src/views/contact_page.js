import React from "react"
import Header2 from "./../header2.js"
import ContactForm from "./contact_form.js"
import FooterPage from "./footer.js"
import "./contactPage.scss"


export default class ContactPage extends React.Component {
    render() {
        return (
            <>
            <div className="contact-body"/>
            <Header2/>
            <div className="contact-content" >  

                <ContactForm/>
                {/* <FooterPage/> */}

            </div>
            {/* </body> */}
            </>
        )
    }
}