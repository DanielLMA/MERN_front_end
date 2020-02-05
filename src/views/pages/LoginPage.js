import React, { Component } from "react";
import LoginForm from "../../components/Forms/fields/LoginForm";
import "./LoginPage.scss"

class LoginPage extends Component {
    render() {
        
        return(

            <body class="login-body">
            <section class="login-grid">
            <div id="login-left">
                <div id="login-left-top">
                  <div id="login-left-top-welcome">
                      <div id="welcome-welcome"><h1>Raw Barbershop</h1></div>
                      <div id="welcome-img"></div>
                      <div id="welcome-tagline"></div>
                  </div>
                </div>
                <div id="login-left-left"></div>
                <div id="login-left-center">
                    <h1>User Login</h1>
             <LoginForm 
               history={this.props.history}
             onLogin={this.props.onLogin} />
               
                    <div class="field">
                    
                   
                    </div>
                  
                    <div class="field">
                    
                    
                    </div>
                  
                   
                      <div class="box-field">
                 
                      </div>
                   
                  
                    <div class="actions">
                  
                    </div>

      
                </div>
                <div id="login-left-right"></div>
            </div>
            <div id="login-right"></div>
          
            
            </section>
      
      
      
      
      
      
        </body>








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