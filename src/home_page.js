import React from "react"
import './style.scss';
import { Link } from "react-router-dom";
import Header from "./header2.js"
import Axios from "axios";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/users').then((res) => console.log(res.data))
    }

    render() {
        return (
            <>
            <body>
                <Header/>
                <div className="container">
                    <div className="content">
                        <h1>Welcome</h1>
                        <Link to="/appointments" className="btn">Book Appointment</Link>
                    </div>
                </div>
                </body>
            </>
        )
    }
}