import React, { Component } from "react";
import LoginForm from "../../components/Forms/fields/LoginForm";
import "./LoginPage.scss"

class LoginPage extends Component {
    render() {
        
        return(

            <div className="contact-body">
                <div className="contact-content">
                    <div className="formBackground">
                        <h1>Login</h1>
                        <LoginForm 
                        history={this.props.history}
                        onLogin={this.props.onLogin} />
                    </div>
                </div>
            </div>

            // <div className="login-body">
            //     <h1>User Login</h1>
            //     <LoginForm 
            //     history={this.props.history}
            //     onLogin={this.props.onLogin} />
            // </div>
        );
    }
}

export default LoginPage;




// function Login() {
//   return (
//     <Card>
//       <Logo />
//       <Form>
//         <Input type="email" placeholder="email" />
//         <Input type="password" placeholder="password" />
//         <Button>Sign In</Button>
//       </Form>
//       <Link to="/signup">Don't have an account?</Link>
//     </Card>
//   );
// }

// export default Login;