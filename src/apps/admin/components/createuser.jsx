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

        
    }




    render() {

        return (
            <div className="admin-home">
                <LeftNavigation selected="Nutzeranlegen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
                        <div className="create-user-box">
                            <p className="create-user-top">Rolle zuweisen</p>
                            <div className="create-user-input-container">
                                <input className="create-user-input" type="text" placeholder="Email"></input>
                                <form name="terminauswahl">
                                    <label className="label-roll" id="RollenLabel">Rolle:</label>
                                    <select className="changeroll" id="rolle" >
                                        <option value="--">Bitte wählen:</option>
                                        <option value="r1">Sekretariat</option>
                                        <option value="r2">Lehrer</option>
                                        <option value="r3">Schüler</option>
                                        <option value="r4">Eltern</option>
                                    </select>
                                    <button className="role-change-button">Bestätigen</button>
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