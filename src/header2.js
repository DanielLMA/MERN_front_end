import React from "react"
import './header.scss';
import { Link } from "react-router-dom";

import LoggedInRoutes from './auth/LoggedInRoutes'
import LoggedOutRoutes from './auth/LoggedOutRoutes'


export default class Header2 extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

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
    //   handleLogout() {
    //     sessionStorage.removeItem('token')
    //     this.redirectToHome()
    //     return <Redirect to='/login' />
    //     Redirect user after logout
    //    this.props.history.push('/login')
    //     console.log(props)
    // }

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

            <div className="header">
                    <div className="headerLinks">
                        <ul>
                            <li>
                                <Link to="/home"className="headerItem">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="headerItem">About</Link>
                            </li>
                            <li>
                                <Link to="/barbers" className="headerItem">Barbers</Link>
                            </li>
                            <li>
                                <Link to="/services" className="headerItem">Services</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="headerItem">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="headerItem">Contact</Link>
                            </li>
                            <li>
                                <Link to="/location" className="headerItem">Location</Link>
                            </li>
                            <span className="login">
                                { otherLinks }
                            </span>
                        </ul>
                    </div>
            </div>
        )
    }
}
