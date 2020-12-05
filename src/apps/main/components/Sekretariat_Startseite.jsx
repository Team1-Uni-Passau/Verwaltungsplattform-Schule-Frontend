import React from 'react';
import '..stylesheets/Sekretariat_Startseite.css'


export default class Sekretariat_Startseite extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <React.Fragment>
                <div className="title">
                    <p>Sekretariat</p>
                </div> 

                <div className="Ankündigung">
                    <p>Letzte Neuigkeiten</p> 
                </div>
                <div className="Ankündigung-box">
                    
                </div>


            </React.Fragment>
        )
    }
}
