import React from 'react';
import '../stylesheets/sicknote.css';


export default class sicknote extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }

        this.confirmSicknote = this.confirmSicknote.bind(this)
    }

    // Krankmeldung ID sollte geschickt werden an dem Frontend
    async confirmSicknote() {
        await fetch('http://localhost:10000/sekretariat/krankmeldungen/'+this.props.sicknoteId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
            this.setState({
                sicknotes: data
            })
        })
    }

    
    render() {

        var todayDate = new Date().toISOString().slice(0,10);
        var displaySicknote = true;

        if(!this.props.display){
            displaySicknote = false;
        }

        if(this.props.rolle == "Lehrender" && !this.props.showTeachers) {
            displaySicknote = false;
        }

        if(this.props.rolle == "Lernender" && !this.props.showStudents) {
            displaySicknote = false;
        }

        return (
            <div className="sicknote-container" style= {displaySicknote? void(0) : {display:'none'}}>   
                <div className="sicknote-title-container">
                    <div className="sicknote-title">Krankmeldung</div>
                </div>

                <div className="sicknote-content">
                    <div className="sicknote-info"><b className="sicknote-bold-style">Name: </b> {this.props.firstname} {this.props.lastname}</div>
                    <div className="sicknote-info"><b className="sicknote-bold-style">Rolle: </b> {this.props.rolle}</div>
                    <div className="sicknote-info"><b className="sicknote-bold-style">Datum: </b>{todayDate}</div>
                </div>

                <button className="confirm-sicknote" onClick={this.confirmSicknote}>Bestätigen</button>
            </div>
        )
    }



}









