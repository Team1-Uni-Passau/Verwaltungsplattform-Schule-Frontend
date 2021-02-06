import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/changeroll.css';
import TopBar from '../../../assets/components/topBar';
import * as PATHS from '../../GlobalConstants';

export default class CreateUser extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            EmailInvalid: false,
            RoleInvalid: false,
        }

        this.handleEMailChange =this.handleEMailChange.bind(this);
        this.confirm = this.confirm.bind(this);
        
    }


    handleEMailChange(e){
        this.eMail = e.target.value;
    }

    handleSelectChange(e){
        this.selectedRole = e.target.value;
    }

    

    async confirm(){
        if (!this.eMail) {
            this.setState({
                EmailInvalid: true
            })
        } else {
            this.setState({
                EmailInvalid: false
            })
        }
        
        
        
        
        if(this.eMail && !this.state.RoleInvalid){
            console.log("1")
            await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/admin/changerole' : PATHS.REACT_APP_PATH_PROD + '/admin/changerole', {
            
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
            
            body: JSON.stringify({
                eMail: this.eMail,
                newRole: this.selectedRole,
            })
    }).then(response => response.text())
    .then(text =>{
        console.log(text)
        // if(data.roleRegisterCodeMapper.role === this.selectedRole){
        //     alert("Die Nutzerrolle wurde erfolgreich zu " +this.selectedRole +" geändert")
        // } else {
        //     alert("Leider ist ein Fehler aufgetreten. Bitte versuchen sie es erneut!")
        // }
    })
}
    }

    render() {

        return (
            <div className="admin-home">
                <LeftNavigation selected="Rolle ändern" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
                        <div className="create-user-box">
                            <p className="create-user-top">Rolle ändern</p>
                            <div className="create-user-input-container">
                                {/* <input className="create-user-input" type="text" placeholder="Vorname" onChange={(e) => this.handleFirstNameChange(e)}></input>
                                <input className="create-user-input" type="text" placeholder="Nachname" onChange={(e) => this.handleNameChange(e)}></input> */}
                                <input className="change-roll-mail" type="text" placeholder="E-mail" onChange={(e) => this.handleEMailChange(e)} style={this.state.EmailInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.EmailInvalid ? void (0) : { display: 'none' }}>Email ist ein Pflichtfeld.</p>
                                {/* <input className="create-user-input" type="text" placeholder="Klasse"></input> */}                                    
                                    <select className="changeroll" id="rolle"  onChange={(e) => this.handleSelectChange(e)}>
                                        <option value="--">Bitte wählen:</option>
                                        
                                        <option value="Lehrender" >Lehrer</option>
                                        
                                        <option value="Eltern">Eltern</option>
                                        
                                    </select>
                                    {/* <p className="form-validation-registration" style={this.state.RoleInvalid ? void (0) : { display: 'none' }}>Bitte wählen sie eine Rolle.</p> */}
                                    <button className="confirm-button" onClick={this.confirm}> Bestätigen</button>
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