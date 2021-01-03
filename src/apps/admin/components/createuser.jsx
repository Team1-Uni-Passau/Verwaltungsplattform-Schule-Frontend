import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/admin.css';
import TopBar from '../../../assets/components/topBar';

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
                            <p className="create-user-top">Neuen Nutzer anlegen</p>
                            <div className="create-user-input-container">
                                <input className="create-user-input" type="text" placeholder="Vorname"></input>
                                <input className="create-user-input" type="text" placeholder="Nachname"></input>
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
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }



}