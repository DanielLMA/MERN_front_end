import React from "react"
import './style.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

export default class App extends React.Component {
    render() {
        return (
            <>
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
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}