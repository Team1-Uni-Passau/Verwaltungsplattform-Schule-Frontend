import React from 'react';
import '../stylesheets/sicknoteform.css';
import DatePicker from 'react-datepicker';
import '../stylesheets/react-datepicker.css';




export default class sicknoteForm extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            startDate: new Date()
        }

        this.onDateChange = this.onDateChange.bind(this);
        this.sendSicknote = this.sendSicknote.bind(this);
    }

    onDateChange(e) {
        this.setState({
            date: e
        })
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
                    <input className="sicknote-form-input" placeholder="Vorname"></input>
                    <input className="sicknote-form-input" placeholder="Name"></input>
                    <DatePicker
                        className="datepicker" 
                        placeholderText='DD/MM/YYYY'
                        dateFormat='dd/MM/yyyy'
                        id='start-date'
                        autoComplete='off'
                        selected={this.state.date}
                        style={{height: '30px'}}
                        onChange={(e) => this.onDateChange(e)}
                    />
                </div>
                <button className="submit-button-sicknote" onClick={this.sendSicknote}>SENDEN</button>
            </div>
        )
    }


}









