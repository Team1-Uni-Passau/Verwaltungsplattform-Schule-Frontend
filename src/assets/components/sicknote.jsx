import React from 'react';
import '../stylesheets/sicknote.css';


export default class sicknote extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <div className="sicknote-container">   
                <div className="sicknote-title-container">
                    <div className="sicknote-title">Krankmeldung</div>
                </div>

                <div className="sicknote-content">
                    <div className="sicknote-info"><b className="sicknote-bold-style">Name: </b> John Doe</div>
                    <div className="sicknote-info"><b className="sicknote-bold-style">Rolle: </b> Lehrer</div>
                    <div className="sicknote-info"><b className="sicknote-bold-style">Datum: </b>10.10.2020</div>
                </div>

                <button className="confirm-sicknote">Bestätigen</button>
            </div>
        )
    }



}









