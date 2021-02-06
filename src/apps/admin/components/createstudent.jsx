import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/admin.css';
import TopBar from '../../../assets/components/topBar';
import * as PATHS from '../../GlobalConstants';



export default class CreateUser extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            FirstNameInvalid: false,
            NameInvalid: false,
            EmailInvalid: false,
            ClassInvalid: false,
            
        }
    
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleeMailChange = this.handleeMailChange.bind(this);
    this.handleclassChange = this.handleclassChange.bind(this);
    this.confirm = this.confirm.bind(this);
    // this.handlepasswordChange = this.handlepasswordChange.bind(this);
        
    }
    
    handleFirstNameChange(e){
        this.firstname = e.target.value;
    }

    handleNameChange(e){
        this.name = e.target.value;
    }

    handleeMailChange(e){
        this.email = e.target.value;
    }

    handleclassChange(e){
        this.class = e.target.value;
    }

    // handlepasswordChange(e){
    //     this.password = e.target.value;
    // }

    async confirm(){
        if (!this.firstname) {
            this.setState({
                FirstNameInvalid: true
            })
        } else {
            this.setState({
                FirstNameInvalid: false
            })
        }
        if (!this.name) {
            this.setState({
                NameInvalid: true
            })
        } else {
            this.setState({
                NameInvalid: false
            })
        }
        if (!this.email) {
            this.setState({
                EmailInvalid: true
            })
        } else {
            this.setState({
                EmailInvalid: false
            })
        }
        if (!this.class) {
            this.setState({
                ClassInvalid: true
            })
        } else {
            this.setState({
                ClassInvalid: false
            })
        }
        console.log("1")
        if (this.class && this.name && this.firstname && this.email){
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/sekretariat/neuerlernender' : PATHS.REACT_APP_PATH_PROD + '/sekretariat/neuerlernender', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                    },
                    body: JSON.stringify({
                        lastName: this.name,
                        firstName: this.firstname,
                        email: this.email,
                        password: '!Schule123',
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
            <div className="admin-home">
                <LeftNavigation selected="Schüler Anlegen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
                        <div className="create-user-box">
                            <p className="create-user-top">Neuen Nutzer anlegen</p>
                            <div className="create-user-input-container">
                                <input className="create-user-input" type="text" placeholder="Vorname" onChange={(e) => this.handleFirstNameChange(e)} style={this.state.FirstNameInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.FirstNameInvalid ? void (0) : { display: 'none' }}>Vorname ist ein Pflichtfeld.</p>
                                <input className="create-user-input" type="text" placeholder="Nachname"onChange={(e) => this.handleNameChange(e)} style={this.state.NameInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.NameInvalid ? void (0) : { display: 'none' }}>Nachname ist ein Pflichtfeld.</p>
                                <input className="create-user-input" type="text" placeholder="E-Mail"onChange={(e) => this.handleeMailChange(e)} style={this.state.EmailInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.EmailInvalid ? void (0) : { display: 'none' }}>Email ist ein Pflichtfeld.</p>
                                <input className="create-user-input" type="text" placeholder="Klasse"onChange={(e) => this.handleclassChange(e)} style={this.state.ClassInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.ClassInvalid ? void (0) : { display: 'none' }}>Bitte geben sie eine Klasse ein.</p>
                                {/* <input className="create-user-input" type="text" placeholder="Password"onChange={(e) => this.handlepasswordChange(e)}></input> */}
                                
                                <p>Das Passwort ist :   !Schule123</p>
                                <button className="confirm-button" onClick={this.confirm}>Bestätigen</button>
                                
                            </div>
                        </div>
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