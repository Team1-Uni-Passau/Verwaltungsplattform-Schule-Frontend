import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import "../stylesheets/teacher.css";

export default class startseite extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }




    render() {
        return (
            <div className="teacher-home">
                <LeftNavigation selected="Klassen einsehen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel-container">
                        <p className="viewclasses-top">Klassen einsehen</p>
                        <input className="searchclass" placeholder="Klasse suchen"></input>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Klasse</th>
                                    <th>Vorname</th>
                                    <th>Nachname</th>
                                    <th>Anwesend</th>
                                                                    </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6b</td>
                                    <td>Michael</td>
                                    <td>Berger</td>
                                    <td>Ja</td>
                                                                    </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


}