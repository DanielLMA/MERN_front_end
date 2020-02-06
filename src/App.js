import React from "react"
// require ("dotenv").config()

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";

import HomePage from "./views/home_page.js"
import AboutPage from "./views/about_page.js"
import BarberPage from "./views/barbers_page.js" 
import ContactPage from "./views/contact_page.js" 
import GalleryPage from "./views/gallery_page.js" 
import LocationPage from "./views/location_page.js" 
import ServicesPage from "./views/services_page.js" 
import AppointmentsPage from "./views/appointments_page.js" 
import RegisterPage from "./views/pages/RegisterPage";
import LoginPage from "./views/pages/LoginPage";
// import { connect } from "react-redux"
// import Register from "./components/auth/Register.js"
// import Login from "./components/auth/Login.js"
// import PrivateRoute from "./components/private-route/PrivateRoute";


// // import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// // Check for token to keep user logged in
// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

export default class App extends React.Component {
  state = {
    token: sessionStorage.getItem("token")
}
onRegister = (token) => {
  sessionStorage.setItem("token", token)
  this.setState({ token })
}

onLogin = (token) => {
  sessionStorage.setItem("token", token)
  this.setState({ token })
}
    render() {
      // const { token } = this.state;
        return (
            <> 
                <BrowserRouter>





                   <div>
                    {/* { token && <h4>User is logged in! ${token}</h4>} */}
                    <Switch>
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/barbers" component={BarberPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/gallery" component={GalleryPage} />
                        <Route exact path="/location" component={LocationPage} />
                        <Route exact path="/services" component={ServicesPage} />
                        <Route exact path="/appointments" component={AppointmentsPage} />
                        <Route exact path="/login" render={(props) => {
                            return <LoginPage {...props} onLogin={this.onLogin}  />
                        }}/>
                        {/* test. delete after done  */}
                        <Route exact path="/register" render={(props) => {
                            return <RegisterPage {...props} onRegister={this.onRegister}  />
                        }} />
                        {/* <Route exact path="/register" component={Register} /> */}
                        {/* <Route exact path="/login" component={Login} /> */}
                        {/* 
                          <PrivateRoute exact path="/dashboard" component={Dashboard} />
                      // </Switch> */}
                      </Switch>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//   return {
//       token: state.auth.token
//   }
// }

// export default connect(mapStateToProps)(App);