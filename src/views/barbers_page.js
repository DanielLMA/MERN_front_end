import React from "react"
import Header from "./../header2.js"
import "./barbers_page_style.scss"
import FooterPage from "./footer.js"

export default class BarberPage extends React.Component {
    render() {
        return (
            <>
            <Header />
            <div className="barber-container">
                <div id="top">
                    {/* Could put the logo here, or that will be on header if revamp  */}
                </div>
                <div id="central-content">
                    <div>
                            <img src={require("./images/taylor_avatar.jpg")} alt="taylor-bio-pic" />
                        <h3>Taylor Finlay</h3>
                        <h6>The Man, the Myth, and the Legend </h6>
                        <p>
                            <strong>Taylor Finlay</strong> at 27 years old has barbering 
                            in his blood. Landing an apprenticeship 
                            with his father at his shop right out of high school, he
                            became a <u>third generation barber</u> and the legacy of his family
                            business fuels his drive and passion. <i>Ten</i> solid years in the biz,
                             he has gained a wealth of experience cutting in many well 
                            renowned shops throughout SE Queensland. <strong>Taylor</strong> appreciates 
                            each individual that takes a seat in his chair, ranging from toddlers to 
                            retirees. He strives to make make each person
                            feel empowered with their new cut when they walk out his door. 
                        </p>
                    </div>
                    <div>
                        <img src={require("./images/jordan_hoare_avatar.jpg")} alt="jordan-bio-pic" />
                        <h3>Jordan</h3>
                        <h6>Style, Creativity,and Pose </h6>
                        <p>
                            <strong>Jordan</strong> comes from humble beginnings, first cutting hair 
                            in the backyard alongside high school friends after the bell rang.
                            He followed up his interest in cutting/styling hair and 
                            started an apprenticeship in 2017 at a male grooming franchise.  
                            <strong> Jordan </strong> is skilled at an entire range of services but favours working 
                            with medium length hair to craft classic styles like the executive 
                            contour or pompadour. He enjoys taking his time with each client 
                            so if you find yourself in his chair you are likely to hear about 
                            it from Taylor, but rest assured, you'll be leaving 
                            with a <u>top-line, quality haircut</u>.  
                        </p>
                    </div>
                </div>
                <FooterPage />
            </div>
            
            </>
        )
    }
}