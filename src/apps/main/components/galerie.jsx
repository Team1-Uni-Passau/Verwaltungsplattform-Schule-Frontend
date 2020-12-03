import React from 'react';
import '../stylesheets/galerie.css'
import HomepagePicture from '../../../assets/images/Homepage.jpg';
import ArtProjekt from '../../../assets/images/Galerie/Classroom_art.jpg';
import PoliticProjekt from '../../../assets/images/Galerie/art_politic_projekt.jpg';
import Orchester from '../../../assets/images/Galerie/orchester.jpg';


export default class galerie extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <React.Fragment>
                <div className="row">
                        <div className="item">
                            <img className="galerie-image" src={HomepagePicture}/>
                            <p className="picture-title">Neue Lernkonzepte</p>
                            </div>
                        <div className="item">
                            <img className="galerie-image" src={ArtProjekt}/>
                            <p className="picture-title">Förderung von Kreativität im Klassenzimmer</p>
                            </div>
                        <div className="item">
                            <img className="galerie-image" src={PoliticProjekt}/>
                            <p className="picture-title">Verknüpfung von Unterrichtsfächern</p>
                            </div>
                        <div className="item">
                            <img className="galerie-image" src={Orchester}/>
                            <p className="picture-title">Unser Schulorchester</p>
                            </div>
                        <div className="item"/>
                        <div className="item"/>
                </div>
            </React.Fragment>
        )
    }



}