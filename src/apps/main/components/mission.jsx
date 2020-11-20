import React from 'react';
import '../stylesheets/mission.css'
import KidsPhoto from '../../../assets/images/creativity.jpg';
import DATA from '../static data/Data.json';
import MissionPhoto from '../../../assets/images/mission.jpg';


export default class mission extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <React.Fragment>
                <div className="first-paragraph">
                    <div className="first-paragraph-left">
                        <div className="be-creative"><b style={{fontSize:"20px",color:'black'}}>be </b>creative</div>
                        <p style={{marginTop:"30px"}}>{DATA.ABOUT_SCHOOl}</p>
                        <br/>
                        <p style={{fontWeight:"bold",color:'#7d7d7d'}}>{DATA.BE_CREATIVE}</p>
                        <br/>
                        <p>{DATA.PARAGRAPH}</p>
                    </div>
                    <img className="kids-photo" src={KidsPhoto}/>
                </div>

                <div className="second-paragraph">
                    <h4 className="educational-mission-title">Bildungsmission</h4>
                    <img className="mission-photo" src={MissionPhoto}></img>
                    <div className="educational-mission-elements">
                        <div className="educational-mission-elements-item">
                            <h4 style={{color:"#FF4338"}}>Gesunde Umgebung</h4>
                            <div className="educational-mission-elements-item-content">{DATA.GESUNDE_UMGEBUNG}</div>
                        </div>
                        <div className="educational-mission-elements-item">
                            <h4 style={{color:"#FF4338"}}>Erfolg</h4>
                            <div className="educational-mission-elements-item-content">{DATA.Erfolg}</div>
                        </div>
                        <div className="educational-mission-elements-item">
                            <h4 style={{color:"#FF4338"}}>Entwicklung</h4>
                            <div className="educational-mission-elements-item-content">{DATA.Entwicklung}</div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }



}