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
                        <div className="success-stories-text">
                            <div className="success-story-name">Max Mustermann</div>
                            <div >{DATA.ABOUT_SCHOOl}</div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="success-stories-image-container"><img className="success-stories-image" src={First_SS_IMAGE}></img></div>
                        <div className="success-stories-text">
                            <div className="success-story-name">Max Mustermann</div>
                            <div >{DATA.ABOUT_SCHOOl}</div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="success-stories-image-container"><img className="success-stories-image" src={First_SS_IMAGE}></img></div>
                        <div className="success-stories-text">
                            <div className="success-story-name">Max Mustermann</div>
                            <div >{DATA.ABOUT_SCHOOl}</div>
                        </div>
                    </div>



                </div>
            </React.Fragment>
        )
    }



}