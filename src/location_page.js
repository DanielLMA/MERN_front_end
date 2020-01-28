import React from "react"
import './style.scss';
import Header2 from "./header2"

export default class LocationPage extends React.Component {
    render() {
        return (
            <>
            <Header2/>
                <div className="about-container" 
                style={{backgroundImage: 'url(' + require('./haircut_pic.jpg') + ')'}}
                >
            

            <div class="content-location">
                <h1>LocationPage</h1> <br />
                <div><img src={require('./maps.png')} alt="google maps"></img></div>
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
            </>
        )
    }
}