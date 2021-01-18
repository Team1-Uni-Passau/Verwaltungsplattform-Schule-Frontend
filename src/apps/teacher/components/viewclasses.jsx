import { CompassCalibrationOutlined } from '@material-ui/icons';
import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import "../stylesheets/teacher.css";
import * as PATHS from '../../GlobalConstants';
export default class viewClass extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            class: []
        }

        this.viewclass = this.viewclass.bind(this);
        // this.getClass = this.getClass.bind(this);
    }
    

    async viewclass() {
        var x = document.getElementById("classId").value
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/klassenliste/' + x  : PATHS.REACT_APP_PATH_PROD + '/lehrender/klassenliste/{classId}', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + JSON.parse(localStorage.getItem("loggedIn")).token,
            }, 
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
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
                        <button className="input-button" onClick={this.viewclass}>Klasse anzeigen</button>
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