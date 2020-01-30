import React from "react"
import './style.scss';
import { Link, Redirect } from "react-router-dom";

export default class Header2 extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        redirect: false
      }

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    //Function to delete the token from localStorage. 
      handleLogout() {
        sessionStorage.removeItem('token')
        return <Redirect to='/login' />
        // Redirect user after logout
       // this.props.history.push('/home')
        //console.log(props)
    }

    
      renderRedirect = () => {
        return <Redirect to='/home' />
        // if (this.state.redirect) {
        //     this.handleLogout()
        //   return <Redirect to='/home' />
        // }
      }



    render() {
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
                                        <Link to="/appointments">Create Appointment</Link>
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
                                        <Link to="/register">Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        {/* {this.renderRedirect()} */}
                                        <button onClick={this.handleLogout}>Logout</button>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
