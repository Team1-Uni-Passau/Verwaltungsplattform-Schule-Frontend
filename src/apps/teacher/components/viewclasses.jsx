import { CompassCalibrationOutlined } from '@material-ui/icons';
import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import "../stylesheets/teacher.css";

export default class startseite extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            class: []
        }

        this.getClass = this.getClass.bind(this);
    }

    async getClass() {
        await fetch('http://localhost:10000/lehrender/klassenliste/' + document.getElementById('classId').value, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    class: data
                })

            })
    }







    render() {
        return (
            <div className="teacher-home">
                <LeftNavigation selected="Klassen einsehen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel-container">
                        <p className="viewclasses-top">Klassen einsehen</p>
                        <input className="searchclass" id="classId" placeholder="Klasse suchen" ></input>
                        <div align="center">
                        <button className="input-button" onClick={this.getClass}>Klasse anzeigen</button>
                        </div>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>UserId</th>
                                    <th>Vorname</th>
                                    <th>Nachname</th>
                                    <th>Anwesend</th>
                                    <th>Krankmeldung</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.class.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{element.affectedUserId}</td>
                                            <td>{element.firstName}</td>
                                            <td>{element.lastName}</td>
                                            <td>{element.presence ? "Ja" : "Nein"}</td>
                                            <td>{element.confirmation? "Ja" : "Nein"}</td>
                                            <td><input type="checkbox"></input></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div align="center"><button className="input-button" >Abwesenheit melden</button></div>
                    </div>
                </div>
            </div>
        )
    }


}