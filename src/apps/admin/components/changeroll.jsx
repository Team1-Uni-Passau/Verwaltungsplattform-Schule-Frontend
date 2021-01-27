import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/admin.css';
import TopBar from '../../../assets/components/topBar';
import * as PATHS from '../../GlobalConstants';

export default class CreateUser extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleEMailChange =this.handleEMailChange.bind(this);
        this.confirm = this.confirm.bind(this);
        
    }
    handleEMailChange(e){
        this.eMail = e.target.value;
    }

    async confirm(){
        var x = document.getElementById('rolle').value
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/admin/changerole' : PATHS.REACT_APP_PATH_PROD + '/admin/changerole', {
            
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
            
            body: JSON.stringify({
                eMail: this.eMail,
                newRole: document.getElementById('rolle').value,
            })
    })
}
// async confirm(){
//     var x = document.getElementById('rolle').value
//     await fetch('http://localhost:10000/admin/changerole', {
        
//         method: 'PUT',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
        
//         body: JSON.stringify({
//             eMail: this.eMail,
//             newRole: x,
//         })
// })
// }


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
                                <input className="change-roll-mail" type="text" placeholder="E-mail" onChange={(e) => this.handleEMailChange(e)}></input>
                                {/* <input className="create-user-input" type="text" placeholder="Klasse"></input> */}
                                <form name="terminauswahl">
                                    
                                    <select className="changeroll" id="rolle" >
                                        <option value="--">Bitte wählen:</option>
                                        <option value="Sekretariat">Sekretariat</option>
                                        <option value="Lehrender">Lehrer</option>
                                        <option value="Administrator">Admin</option>
                                        <option value="Eltern">Eltern</option>
                                        
                                    </select>
                                    <button className="confirm-button" onClick={this.confirm}> Bestätigen</button>
                                </form>
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