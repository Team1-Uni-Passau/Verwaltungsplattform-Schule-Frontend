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
        
        

        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL : PATHS.REACT_APP_PATH_PROD + '/neuerlernender', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        lastName: this.name,
                        firstName: this.firstname,
                        email: this.email,
                        password: '!Schule123',
                        classId: this.class,
                        
              
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
                                <input className="create-user-input" type="text" placeholder="Klasse"onChange={(e) => this.handleclassChange(e)}></input>
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