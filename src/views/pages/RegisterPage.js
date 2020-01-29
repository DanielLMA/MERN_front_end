import React, { Component } from "react";
import RegisterForm from "../../components/Forms/fields/RegistrationForm";
import "./RegisterPage_style.scss"

class RegisterPage extends Component {
    render() {
        console.log(this.props);
        
        return(
            <div>
                <h1>Register a new user</h1>
                <RegisterForm 
                history={this.props.history}
                onRegister={this.props.onRegister} />
            </div>
        );
    }
}

export default RegisterPage;