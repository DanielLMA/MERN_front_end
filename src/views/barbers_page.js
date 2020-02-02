import React from "react"
import Header from "./../header2.js"
import "./barbers_page_style.scss"

export default class BarberPage extends React.Component {
    render() {
        return (
            <>
            <div>
            {/* <Header /> */}
            <div className="barber-container">
                <div id="top">
                    {/* Could put the logo here, or that will be on header if revamp  */}
                </div>
                <div id="central-content">
                    <img src={require("./images/taylor_avatar.jpg")} />
                    <h3>Taylor</h3>
                    <h6>The man, the myth, the legend. <br/>
                        <strong>Taylor</strong> has been in the business
                        of making people feel strong, empowered, maybe 
                        even <strong>enlightened</strong>, by offerring his 
                        services in the styling business for X years. 
                        You will always feel good about yourself when
                        you enter his shop and <u>helluh good </u>  
                        when you strut out. 
                    </h6>
                </div>
                <div id="bottom">
                   footer?
                </div>
            </div>
            </div>
            </>
        )
    }
}