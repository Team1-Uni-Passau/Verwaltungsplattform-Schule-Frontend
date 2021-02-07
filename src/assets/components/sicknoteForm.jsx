import React from 'react';
import '../stylesheets/sicknoteform.css';
import DatePicker from 'react-datepicker';
import '../stylesheets/react-datepicker.css';




export default class sicknoteForm extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }

        this.sendSicknote = this.sendSicknote.bind(this);
    }


    sendSicknote(){
        if(this.props.sendSicknoteClicked){
            this.props.sendSicknoteClicked(this.state.date);
        }
    }


    render() {


        return (
            <div className="sicknote-form-container">   
                <div className="sicknote-form-title">Krankmeldung verfassen</div>
                <div className="input-container-sicknote-form">
                    {/* <input className="sicknote-form-input" placeholder="Vorname"></input>
                    <input className="sicknote-form-input" placeholder="Name"></input> */}
                    <p>Bitte Beachten sie, dass Krankmeldungen über das System nur bis 09.00 Uhr möglich sind.</p>
                    <p>Eine Krankmeldungen ist nur für den aktuellen Tag möglich. Jeder weitere Tag benötigt eine eigene Krankmeldung!</p>
                    <p>Sollten sie eine nachträgliche Krankmeldung vornehmen wollen wenden sie sich bitte Telefonisch an ihre Schule. </p>
                </div>
                <button className="submit-button-sicknote" onClick={this.sendSicknote}>Krankmeldung Absenden</button>
                <div style={this.props.passedTimeLimit ? {color: 'red', marginBottom:'10px'} : {display:'none'}}>{this.props.passedTimeLimit ? "Sie können eine Krankmeldung nach 09:00 uhr nicht erstellen." : void(0)}</div>
                <div style={this.props.sickNoteCreated ? {color: 'green', marginBottom:'10px'} : {display:'none'}}>{this.props.sickNoteCreated ? "Krankmeldung wurde erfolgreich erstellt." : "Unbekannter Fehler, versuchen Sie es bitte erneut"}</div>    
            </div>
        )
    }


}










