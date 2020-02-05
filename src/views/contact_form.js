import React from "react"
import "./contactPage.scss"
// import axios from "axios"
// import LocalApi from '../apis/local'

//Return to this component to refactor

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        name: '',
        email: '',
        message: ''
      }
      // this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
    }
 

    handleEmail = event => {
      this.setState({
        email: event.target.value
      })
    }
    handleName = event => {
      this.setState({
        name: event.target.value
      })
    }
    handleMessage = event => {
      this.setState({
        message: event.target.value
      })
    }

    //refactor this to make it more DRY

    // handleShow = async (event) => {
    //   const form = await LocalApi.get('/form')
    // }

    handleSubmit (event) {

      // event.preventDefault();
      // const { email, name, message} = this.state
      // const form = await LocalApi.post('/form', {
      //   email,
      //   name,
      //   message
      // })
      const templateId = "template_Id"
      this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})


      this.setState({
        email: '',
        name: '',
        message: ''
        
      }) //set input fields to blank strings

    }

    sendFeedback (templateId, variables) {
      window.emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
          console.log('Email successfully sent!')
        })
        .catch(err => console.error('Sending failed:', err))    
    }


    render() {
      const { message, email, name} = this.state //destructured values,
      return (
        
          <div className="contactForm">
            
        <form action="MAILTO:rawbarbershop2020@gmail.com" method="post" encType="text/plain">
          <div className="title"><h1>Contact</h1></div>
          <div className="item">
            <label className="label">
              Email:
            </label>
            <input 
              className="input"
              placeholder="E-mail"
              type="text" 
              value={email} 
              onChange={this.handleEmail}
              />
          </div>

          <div className="item">
            <label className="label" >
              Name:
            </label>
            <input 
              placeholder="Name"
              className="input"
              type="text" 
              value={name}
              onChange={this.handleName} 
              />
          </div>

          <div className="item">
            <label className="label">
              Message:
            </label>
            <textarea 
              placeholder="Message"
              className="inputMessage"
              value={message} 
              onChange={this.handleMessage}
              />
           </div>

          <input type="submit" value="Send" className="button" />
          {/* <input type="button" value="Show Messages" onClick={this.handleShow} /> */}
        </form>
        </div>
      );
    }
  } 