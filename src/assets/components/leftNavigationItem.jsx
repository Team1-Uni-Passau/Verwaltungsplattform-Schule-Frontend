import React from 'react';
import '../stylesheets/leftnavigationitem.css';

const roles = {
    LEHRENDE: 'Lehrender',
    LERNENDE: 'Lernender',
    ADMIN: 'Administrator',
    ELTERN: 'Eltern',
    SEKRETARIAT: 'Sekretariat'
}

export default class leftNavigationItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }

        this.redirectToRespectivePage = this.redirectToRespectivePage.bind(this);
    }


    //Method to navigate throughout the app in the secrtariat view (Redirection)
    redirectToRespectivePage() {
        switch (JSON.parse(localStorage.getItem("loggedIn")).role) {
            case roles.SEKRETARIAT:
                switch (this.props.title) {
                    case "Ankündigungen":
                        window.location.href = "/sekretariat/events";
                        break;
                    case "Krankmeldungen":
                        window.location.href = "/sekretariat/sicknotes";
                        break;
                    case "Wochenpläne":
                        window.location.href = "/sekretariat/schedule";
                        break;
                    default:
                        void (0);
                }
                break;
            case roles.ELTERN:
                switch (this.props.title) {
                    case "Ankündigungen":
                        window.location.href = "/parent/events";
                        break;
                    case "Krankmeldung erfassen":
                        window.location.href = "/parent/sicknotes";
                        break;
                    case "Wochenplan":
                        window.location.href = "/parent/schedule";
                        break;
                    case "Noten einsehen":
                        window.location.href = "/parent/grades";
                        break;
                    case "Präsenz anzeigen":
                        window.location.href = "/parent/presence";
                        break;
                    case "Notenschema":
                        window.location.href = "/parent/schema";
                        break;
                    default:
                        void (0);
                }
            case roles.ADMIN:
                switch (this.props.title) {
                    case "Ankündigungen":
                        window.location.href = "/admin/events";
                        break;
                    case "Krankmeldungen":
                        window.location.href = "/admin/sicknotes";
                        break;
                    case "Wochenpläne":
                        window.location.href = "/admin/schedule";
                        break;
                    case "Nutzer Anlegen":
                        window.location.href = "/admin/createuser";
                        break;
                    default:
                        void (0);
                }
                break;
            default:
                void (0);
            case roles.ELTERN:
                switch (this.props.title) {
                    case "Ankündigungen":
                        window.location.href = "/student/events";
                        break;
                    case "Krankmeldung erfassen":
                        window.location.href = "/student/sicknotes";
                        break;
                    case "Wochenplan":
                        window.location.href = "/student/schedule";
                        break;
                    case "Noten einsehen":
                        window.location.href = "/student/grades";
                        break;
                    case "Präsenz anzeigen":
                        window.location.href = "/student/presence";
                        break;
                    case "Notenschema":
                        window.location.href = "/student/schema";
                        break;
                    default:
                        void (0);
                }

        }
    }


    render() {
        return (
            <div className="left-navigation-item-container" onClick={this.redirectToRespectivePage}>
                <img className="left-navigation-item-image" src={this.props.img} />
                <p className="left-navigation-item-title" style={this.props.selected ? { color: 'red' } : void (0)}>{this.props.title}</p>
            </div>
        )
    }



}