import React from "react"
// import axios from "axios"
import LocalApi from '../apis/local'

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        name: '',
        email: '',
        message: ''
      }
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

    handleShow = async (event) => {
      const form = await LocalApi.get('/form')
    }

    handleSubmit = async (event) => {

      event.preventDefault();
      const { email, name, message} = this.state
      const form = await LocalApi.post('/form', {
        email,
        name,
        message
      })

      this.setState({
        email: '',
        name: '',
        message: ''
      }) //set input fields to blank strings

      alert('Message Submitted!'); 
    }


    render() {
      const { email, name, message} = this.state //destructured values
      return (
          <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
          <label>
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
          </label>
          <br />
          <label>
            Message:
            <textarea 
            value={message} 
            onChange={this.handleMessage}
            />
           </label>
           <br />
          <input type="submit" value="Submit" /><br />
          <input type="button" value="Show Messages" onClick={this.handleShow} />
        </form>
        </div>
      );
    }
  } 