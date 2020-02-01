import React from "react"
import './style.scss';
import Header2 from "./header2.js"

export default class AboutPage extends React.Component {
    render() {
        return (
            <>
            <body>
            <Header2 
            {...this.props}
            history={this.props.history}
            />
                <div className="about-container" 
                // style={{backgroundImage: 'url(' + require('./haircut_pic.jpg') + ')'}}
                >
                <div className="content">
                    <h1>About</h1> <br />
                    <p>RAW BARBERSHOP IS A STUDIO MADE UP OF PASSIONATE HAIR STYLISTS, SPECIALIZING IN MENS HAIRDRESSING, TRADITIONAL & MODERN BARBERING. WE ARE DEDICATED TO PROVIDING QUALITY HAIRCUTS AND SERVICE TO EVERYONE WHO WALKS THROUGH OUR DOORS. OUR TEAM IS VERSITILE TO CATER FOR ALL TYPES OF HAIR WHILST HAVING AN IN-DEPTH KNOWLEDGE OF TRADTIONAL AND CONTEMPORY HAIRSTYLES.</p>
                    <br />
                    <p>AT RAW, WE TAKE PRIDE IN ATTENTION TO DETAIL. FROM WHEN YOU SIT IN OUR CHAIR, WE CONSULT WITH YOU TO GET A FURTHER UNDERSTANDING ON WHICH STYLE YOU WOULD LIKE AND PROVIDE YOU WITH OUR PROFRESSIONAL OPINION ON WHETHER IT WILL COMPLIMENT YOUR FACIAL STRUCTURE, HAIR TYPE AND LIFESTYLE.</p>
                    <br />
                    <p>WE STRIVE TO PROVIDE OUR CLIENTELE WITH THE HIGHEST QUALITY SERVICE AND BE LEAVING OUR STUDIO WITH THE UTMOST SATISFACTION.</p>
                </div>

                </div>
            </body>
            </>
        )
    }
}