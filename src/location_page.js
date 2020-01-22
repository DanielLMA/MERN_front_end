import React from "react"
import './style.scss';

export default class LocationPage extends React.Component {
    render() {
        return (
            <>
            <h1>LocationPage</h1>
            <br />
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=raw%20barber%20shop%20gold%20coast&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
                </div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
            </div>

            <div>
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
            </>
        )
    }
}