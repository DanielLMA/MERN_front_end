import React from "react"
import Header2 from "./../header2"
import FooterPage from "./footer.js"
import '../style.scss';


export default class LocationPage extends React.Component {
    render() {
        return (
            <>
             <Header2/>
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./images/haircut_pic.jpg') + ')'}}
                >


            <div className="content-location">
                <h1>Location</h1> <br />

                <img src={require('./images/maps.png')} alt="google maps"></img>

                <div>

                <p>
                RAW BARBERSHOP | SHOP 3 45 STATION ST, NERANG QLD 4211<br />

                0478831080<br /> <br />

                MONDAY 8:30AM – 5:00PM<br />

                TUESDAY 8:30AM-5:00PM<br />

                WEDNESDAY 8:30AM – 5:00PM<br />

                THURSDAY 8:30AM – 5:00PM<br />

                FRIDAY 8:30AM – 5:00PM<br />

                SATURDAY 8:00AM – 1:00PM<br />

                SUNDAY CLOSE
                </p>
                </div>
            </div>
            </div>
            <FooterPage />

            </>
        )
    }
}