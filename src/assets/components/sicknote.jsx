import { TramRounded } from '@material-ui/icons';
import React from 'react';
import '../stylesheets/sicknote.css';
import * as PATHS from '../../GlobalConstants';

export default class sicknote extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
            confirmed: null,
            time: null
        }

        this.confirmSicknote = this.confirmSicknote.bind(this)
    }

    componentDidMount() {
        this.setState({
            confirmed: this.props.confirmation
        })
      }
      

    // Krankmeldung ID sollte geschickt werden an dem Frontend
    async confirmSicknote() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL : PATHS.REACT_APP_PATH_PROD + '/sekretariat/krankmeldungen/'+this.props.sicknoteId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
        })

        this.setState({
            confirmed: true
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

        var confirmed = null;

        if(this.state.confirmed) {
            confirmed = <p className="sicknote-confirmed">Bestätigt</p>
        } else {
          confirmed =   <button className="confirm-sicknote" onClick={this.confirmSicknote}>Bestätigen</button>;  
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
                {confirmed}
            </div>
        )
    }



}
// Method to check if localhost
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );









