import React from "react"
// import axios from "axios"
import LocalApi from '../apis/local'

//Return to this component to refactor

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        name: 'Contact page',
        email: 'rawbarbershop2020@gmail.com',
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
      const { email, name, message} = this.state //destructured values
      return (
        
          <div className="contactForm">
            
        <form>
          {/* <label>
            Email:
            <input 
            type="text" 
            value={email} 
            onChange={this.handleEmail}
            />
          </label>
          <br />
          <label>
            Name:
            <input 
            type="text" 
            value={name}
            onChange={this.handleName} 
            />
          </label> */}
          <br />
          <label>
            Message:
            <textarea 
            value={message} 
            onChange={this.handleMessage}
            />
           </label>
           <br />
          <input type="submit" value="Submit" onClick={this.handleSubmit} /><br />
          {/* <input type="button" value="Show Messages" onClick={this.handleShow} /> */}
        </form>
        </div>
      );
    }
  } 