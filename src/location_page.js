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
            

            <div class="content">
                <h1>LocationPage</h1> <br />
                <img src={require('./maps.png')} alt="google maps"></img>

                <p>
                RAW BARBERSHOP | SHOP 3 45 STATION ST, NERANG QLD 4211

                0478831080

                MONDAY 8:30AM – 5:00PM

                TUESDAY 8:30AM-5:00PM

                WEDNESDAY 8:30AM – 5:00PM

                THURSDAY 8:30AM – 5:00PM

                FRIDAY 8:30AM – 5:00PM

                SATURDAY 8:00AM – 1:00PM

                SUNDAY CLOSE
                </p>
            </div>
            </div>
            </>
        )
    }
}