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
    }

    onDateChange(e) {
        this.setState({
            startDate: e
        })
    }


    render() {


        return (
            <div className="sicknote-form-container">   
                <div className="sicknote-form-title">Krankmeldung verfassen</div>
                <input className="sicknote-form-input" placeholder="Vorname"></input>
                <input className="sicknote-form-input" placeholder="Name"></input>
                <input className="sicknote-form-input" placeholder="Benutzer id"></input>
                <DatePicker
                    className="datepicker" 
                    placeholderText='DD/MM/YYYY'
                    dateFormat='dd/MM/yyyy'
                    id='start-date'
                    autoComplete='off'
                    selected={this.state.startDate}
                    style={{height: '30px'}}
                    onChange={(e) => this.onDateChange(e)}
                />
                <button className="submit-button-sicknote">SENDEN</button>
            </div>
        )
    }


}









