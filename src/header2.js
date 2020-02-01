import React from "react"
import './style.scss';
import { Link } from "react-router-dom";

import LoggedInRoutes from './auth/LoggedInRoutes'
import LoggedOutRoutes from './auth/LoggedOutRoutes'


export default class Header2 extends React.Component {
    constructor(props) {
        super(props)
    }

    // redirectToHome = () => {
    //     const { history } = this.props;
    //     if(history) 
    //     console.log("history is present")
    //     // history.push('/home');
    //    }

    // state = {
    //     redirect: false
    //   }

    //   setRedirect = () => {
    //     this.setState({
    //       redirect: true
    //     })
    //   }

    //Function to delete the token from localStorage. 
      handleLogout() {
        sessionStorage.removeItem('token')
        // this.redirectToHome()
        // return <Redirect to='/login' />
        // Redirect user after logout
    //    this.props.history.push('/login')
        //console.log(props)
    }

    isLoggedIn() {
      const token = sessionStorage.getItem('token');
      if (token) return true;
    }

    
    //   renderRedirect = () => {
    //     return <Redirect to='/home' />
    //     // if (this.state.redirect) {
    //     //     this.handleLogout()
    //     //   return <Redirect to='/home' />
    //     // }
    //   }



    render() {

        const otherLinks = this.isLoggedIn() ? <LoggedInRoutes /> : <LoggedOutRoutes />
        return (
            <>
                <div className="menu-container">
                    <input type="checkbox" className="toggler"/>
                    <div className="hamburger" >
                        <div></div>
                    </div>
                    <div className="menu">
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/barbers">Barbers</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/seminars-training">Seminars - Training</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/location">Location</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    { otherLinks }
                                </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
