import React from 'react';
import DATA from '../static data/Data.json';
import '../stylesheets/story.css';
import First_SS_IMAGE from '../../../assets/images/success-story-one.jpg';

export default class story extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <React.Fragment>
                <div className="welcome-part">
                    <h4 className="welcome" >Willkommen.</h4>
                    <div className="welcome-paragraph">
                        <p style={{marginTop:"30px"}}>{DATA.PARAGRAPH}</p>
                        <br/>
                        <p style={{fontWeight:"bold",color:'#7d7d7d'}}>{DATA.BE_CREATIVE}</p>
                        <br/>
                        <p>{DATA.PARAGRAPH}</p>
                    </div>
                </div>

                <div className="success-stories">
                    <h4 className="success-stories-title">Success Stories:</h4>
                    <div className="container">
                        <div className="success-stories-image-container"><img className="success-stories-image" src={First_SS_IMAGE}></img></div>
                        <div className="success-stories-text-title">
                            <div className="success-story-name">Max Mustermann</div>
                            <div className="success-stories-text">{DATA.ABOUT_SCHOOl}</div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="success-stories-image-container"><img className="success-stories-image" src={First_SS_IMAGE}></img></div>
                        <div className="success-stories-text-title">
                            <div className="success-story-name">Max Mustermann</div>
                            <div className="success-stories-text">{DATA.ABOUT_SCHOOl}</div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="success-stories-image-container"><img className="success-stories-image" src={First_SS_IMAGE}></img></div>
                        <div className="success-stories-text-title">
                            <div className="success-story-name">Max Mustermann</div>
                            <div className="success-stories-text">{DATA.ABOUT_SCHOOl}</div>
                        </div>
                    </div>
                </div>

                <div className="contact-us-container">
                    <div className="contact-us">
                        <div className="contact-us-title">Kontaktieren Sie uns</div>
                        <div className="inputs-container">
                            <input type="text" placeholder="Vorname" className="first-name"></input>
                            <input type="text" placeholder="Nachname" className="last-name"></input>
                            <input type="text" placeholder="E-Mail" className="e-mail"></input>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }



}