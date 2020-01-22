import React from "react"
import './style.scss';

export default class ContactPage extends React.Component {
    render() {
        return (
            <>
            <h1>ContactPage</h1>
            <br />
            <form>
                <input type="email">E-mail</input>
                <input type="text">Name</input>
                <input type="text">Message</input>
            </form>
            </>
        )
    }
}