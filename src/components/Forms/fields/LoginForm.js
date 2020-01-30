import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { setAuthToken } from "../../../actions";
import { connect } from "react-redux"

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

  axios
    .post("http://localhost:5000/login", { email, password })
        .then(res => {
            this.props.onLogin(res.data.token); 
            this.props.history.push('/home')
        })
 
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {

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
          <input type="submit" value="Login User" />
        </p>
      </form>
    );
  }
}

export default connect(null, {
  setAuthToken
})(withRouter(LoginForm));