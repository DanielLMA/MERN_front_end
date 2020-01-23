import React from "react"
import './style.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./home_page.js"
import TitlePage from "./title_page.js"
import AboutPage from "./about_page.js"
import BarberPage from "./barbers_page.js" 
import ContactPage from "./contact_page.js" 
import GalleryPage from "./gallery_page.js" 
import LocationPage from "./location_page.js" 
import SeminarsTrainingPage from "./seminars_training_page.js" 
import ServicesPage from "./services_page.js" 
import AppointmentsPage from "./appointments_page.js" 
import Register from "./components/auth/Register.js"
import Login from "./components/auth/Login.js"

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}









export default class App extends React.Component {
    render() {
        return (
            <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/barbers" component={BarberPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/gallery" component={GalleryPage} />
                        <Route exact path="/location" component={LocationPage} />
                        <Route exact path="/seminars-training" component={SeminarsTrainingPage} />
                        <Route exact path="/services" component={ServicesPage} />
                        <Route exact path="/appointments" component={AppointmentsPage} />
                        <Route exact path="/titlepage" component={TitlePage} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        </Switch>
                    </Switch>
                </BrowserRouter>
            </Provider>
            </>
        )
    }
}