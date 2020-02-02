import React from "react"
import Header from "./../header2.js"
import "./barbers_page_style.scss"
import FooterPage from "./footer.js"

export default class BarberPage extends React.Component {
    render() {
        return (
            <>
            
            {/* <Header /> */}
            <div className="barber-container">
                <div id="top">
                    {/* Could put the logo here, or that will be on header if revamp  */}
                </div>
                <div id="central-content">
                    <div>
                            <img src={require("./images/taylor_avatar.jpg")} />
                        <h3>Taylor</h3>
                        <h6>The Man, the Myth, and the Legend <br/>
                            <strong>Taylor</strong> has been in the business
                            of making people feel strong, empowered, maybe 
                            even <strong>enlightened</strong>, by offerring his 
                            services in the styling business for X years. 
                            You will always feel good about yourself when
                            you enter his shop and <u>helluh good </u>  
                            when you strut out. 
                        </h6>
                    </div>
                    <div>
                        <img src={require("./images/anonymous_barber.jpg")} />
                        <h3>Barber #2</h3>
                        <h6>Style, Creativity,and Pose  <br/>
                            Take a look in the mirror. <strong>Barber #2 </strong> 
                            will help you define your distinct style. <strong>
                            Barber #2</strong> has been at it for X years helping
                            men reach their peak and find their style. 
                            You'll <u>never miss a beat</u>. Look good for that 
                            presentation, wedding, date. Life's too short for
                            a bad haircut. 
                        </h6>
                    </div>
                </div>
                <FooterPage />
            </div>
            
            </>
        )
    }
}