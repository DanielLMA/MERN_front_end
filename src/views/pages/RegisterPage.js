import React, { Component } from "react";
import RegisterForm from "../../components/Forms/fields/RegistrationForm";
import "./RegisterPage_style.scss"
// import Header from "../../header2"

class RegisterPage extends Component {
    render() {
        // console.log(this.props);
        
        return(
            
            <div className="contact-body">                        
            {/* <Header /> */}
                <div className="contact-content">
                    <div className="formBackground">
                        <h1>Register a new user</h1><br />
                        <RegisterForm 
                        history={this.props.history}
                        onRegister={this.props.onRegister}
                        currentUser={this.props.currentUser} />
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;