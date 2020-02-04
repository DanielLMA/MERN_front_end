import React from "react"

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Message Submitted!');
      event.preventDefault();
    }

    render() {
      return (
          <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" />
          </label>
          <br />
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Message:
            <textarea />
           </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  } 