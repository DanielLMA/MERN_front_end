import React from "react"
import './style.scss';
import Header from "./header.js"
import Header2 from "./header2.js"
import TitlePage from "./title_page.js"

export default class App extends React.Component {
    render() {
        return (
            <>
            <Header2/>
            {/* <Header/> */}
            <TitlePage/>
            </>
        )
    }
}