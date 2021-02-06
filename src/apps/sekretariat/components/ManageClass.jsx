
import { cleanData } from 'jquery';
import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import * as PATHS from '../../GlobalConstants';

export default class events extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            NutzerIDInvalid:false,
            classInvalid: false,
        }

        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNutzerIDChange = this.handleNutzerIDChange.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.confirm = this.confirm.bind(this);

    }

    handleClassChange(e) {
        this.class = e.target.value;
    }

    handleFirstNameChange(e) {
        this.firstname = e.target.value;
    }
    handleNameChange(e) {
        this.name = e.target.value;
    }
    handleNutzerIDChange(e) {
        this.NutzerID = e.target.value;
    }
    handleEmailChange(e){
        this.eMail = e.target.value;
    }

    async confirm(){
        if (!this.NutzerID) {
            this.setState({
                NutzerIDInvalid: true
            })
        } else {
            this.setState({
                NutzerIDInvalid: false
            })
        }
        if (!this.class) {
            this.setState({
                classInvalid: true
            })
        } else {
            this.setState({
                classInvalid: false
            })
        }
        
        
        if(this.NutzerID && this.class){
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/sekretariat/klassenliste/keineklasse/klassehinzufuegen' : PATHS.REACT_APP_PATH_PROD + '/sekretariat/klassenliste/keineklasse/klassehinzufuegen', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                    },
                    body: JSON.stringify({
                        studentId: this.NutzerID,
                        classId: this.class,
                       
                        
              
            })
    }).then(res => res.text())          
    .then(text => {
        console.log(text)
    if(text == ""){
        alert("Fehler")
    }
    else{
        alert(text)
        location.reload()
    }
        

    })
}
    }

  





    render() {
        return (
            <div className="sekretariat-home">
                <LeftNavigation selected="Klassen verwalten" />
                <div className="flex-right-container">
                    <TopBar />
                    
                        
                        <div className="ManageClassBox">
                        <p className="ManageClassTop">Klasse Zuweisen</p>
                            
                            {/* <input className="ManageClassInput" type="text" placeholder="Name" onChange={(e) => this.handleNameChange(e)}></input>
                            <input className="ManageClassInput" type="text" placeholder="Vorname" onChange={(e) => this.handleFirstNameChange(e)}></input> */}
                            <input className="ManageClassInput" id="userid" type="text" placeholder="Nutzer ID" onChange={(e) => this.handleNutzerIDChange(e)}style={this.state.NutzerIDInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                            <p className="password-restore-text" style={this.state.NutzerIDInvalid ? void (0) : { display: 'none' }}>Bitte geben sie eine Nutzer ID an.</p>
                            {/* <input className="ManageClassInput" type="text" placeholder="E-mail" onChange={(e) => this.handleEmailChange(e)}></input> */}
                            <input className="ManageClassInput" id="class" type="text" placeholder="Klasse" onChange={(e) => this.handleClassChange(e)}style={this.state.classInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                            <p className="password-restore-text" style={this.state.classInvalid ? void (0) : { display: 'none' }}>Bitte geben sie eine Klasse an.</p>
                            <button className="ConfirmButton" onClick={this.confirm}>Bestätigen</button>
                            

                        
                    </div>
                </div>
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