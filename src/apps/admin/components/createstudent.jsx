import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/admin.css';
import TopBar from '../../../assets/components/topBar';

export default class CreateUser extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleeMailChange = this.handleeMailChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.confirm = this.confirm.bind(this);
        
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

    handleClassChange(e){
        this.class = e.target.value;
    }

    async confirm(){
        
        await fetch('http://localhost:10000/registration', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        registerFirstName: this.name,
                        registerName: this.firstname,
                        registerEmail: this.email,
                        registerPassword: "!Schule1996",
                        registerCode: "200",
                        roleCheckedInRegisterForm: "Lernender",
              
            })
    })
}


    render() {

        return (
            <div className="admin-home">
                <LeftNavigation selected="Schüleranlegen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
                        <div className="create-user-box">
                            <p className="create-user-top">Neuen Nutzer anlegen</p>
                            <div className="create-user-input-container">
                                <input className="create-user-input" type="text" placeholder="Vorname" onChange={(e) => this.handleFirstNameChange(e)}></input>
                                <input className="create-user-input" type="text" placeholder="Nachname"onChange={(e) => this.handleNameChange(e)}></input>
                                <input className="create-user-input" type="text" placeholder="E-Mail"onChange={(e) => this.handleeMailChange(e)}></input>
                                <input className="create-user-input" type="text" placeholder="Klasse"onChange={(e) => this.ClassChange(e)}></input>
                                
                                <p>Das Passwort ist :   !Schule123</p>
                                <button className="confirm-button">Bestätigen</button>
                                
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }



}