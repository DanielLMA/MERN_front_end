import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { setAuthToken } from "../../../actions";
import { connect } from "react-redux"

class RegisterForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

  axios
    .post("http://localhost:5000/auth/register", { email, password })
    // try {
    //     const response = await axios.post('http://localhost:5000/auth/register', { 
    //         email,  
    //         password 
    //     })
    //     this.props.onRegister(response.data.token, () =>
    //         this.props.history.push("/")
    //         )
    // } catch (error) {
    //     this.setState({ error })
    // }
        
        // .catch(err => console.log(err))
        .then(res => { this.props.onRegister(res.data.token); 
            this.props.history.push('/home') })
        .then(res => console.log(res))
        // .then(res => {
        //     this.props.setAuthToken(res.data.token);
        //     this.props.history.push("/")
        // }
        // )
        // .catch(err => console.error(err))
  }


  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    // console.log(this.props);
    const { email, password } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={event => this.onInputChange("email", event)}
          />
        </p>
        <p>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={password}
            onChange={event => this.onInputChange("password", event)}
          />
        </p>
        <p>
          <input type="submit" value="Register New User" />
        </p>
      </form>
    );
  }
}

export default connect(null, {
  setAuthToken
})(withRouter(RegisterForm));