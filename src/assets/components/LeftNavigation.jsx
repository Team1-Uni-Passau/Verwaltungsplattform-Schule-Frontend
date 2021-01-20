import React from 'react';
import '../stylesheets/leftNavigation.css';
import LeftNavigationItem from './leftNavigationItem';
import EventsIcon from '../images/events-icon.png';
import SicknessIcon from '../images/sickness-icon.png';
import ScheduleIcon from '../images/week-plan.png';
import GradesIcon from '../images/grades.png';
import PresenceIcon from '../images/presence.png';
import SchemaIcon from '../images/schema.png';
import AddUserIcon from '../images/users.png';
import ExamIcon from '../images/Exam.png';
import ClassroomIcon from '../images/Classroom.png';
import ManageRollIcon from '../images/RoleManagement.png'


const roles = {
    LEHRENDE: 'Lehrender',
    LERNENDE: 'Lernender',
    ADMIN: 'Administrator',
    ELTERN: 'Eltern',
    SEKRETARIAT: 'Sekretariat'
}

export default class LeftNavigation extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        var items = null;

        switch (JSON.parse(localStorage.getItem("loggedIn")).role) {
            case roles.SEKRETARIAT:
                items = <div className="left-navigation-items-container">
                    <LeftNavigationItem img={EventsIcon} title="Ankündigungen" selected={this.props.selected === "Ankündigung"} />
                    <LeftNavigationItem img={SicknessIcon} title="Krankmeldungen" selected={this.props.selected === "Krankmeldungen"} />
                    <LeftNavigationItem img={ScheduleIcon} title="Wochenpläne" selected={this.props.selected === "Wochenpläne"} />
                    <LeftNavigationItem img={ClassroomIcon} title="Klassen verwalten" selected={this.props.selected === "Klassen verwalten"} />
                    <LeftNavigationItem img={ManageRollIcon} title="Rolle ändern" selected={this.props.selected === "Rolle ändern"} />
                </div>
                break;
            case roles.ELTERN:
                items = <div className="left-navigation-items-container">
                    <LeftNavigationItem img={EventsIcon} title="Ankündigungen" selected={this.props.selected === "Ankündigung"} />
                    <LeftNavigationItem img={SicknessIcon} title="Krankmeldung erfassen" selected={this.props.selected === "Krankmeldung erfassen"} />
                    <LeftNavigationItem img={ScheduleIcon} title="Wochenplan" selected={this.props.selected === "Wochenplan"} />
                    <LeftNavigationItem img={GradesIcon} title="Noten einsehen" selected={this.props.selected === "Noten"} />
                    <LeftNavigationItem img={PresenceIcon} title="Präsenz anzeigen" selected={this.props.selected === "Anwesenheit"} />
                    {/* <LeftNavigationItem img={SchemaIcon} title="Notenschema" selected={this.props.selected === "Schema"} /> */}
                </div>
                break;
            case roles.ADMIN:
                items = <div className="left-navigation-items-container">
                    <LeftNavigationItem img={EventsIcon} title="Ankündigungen" selected={this.props.selected === "Ankündigung"} />
                    <LeftNavigationItem img={SicknessIcon} title="Krankmeldungen" selected={this.props.selected === "Krankmeldungen"} />
                    <LeftNavigationItem img={ScheduleIcon} title="Wochenpläne" selected={this.props.selected === "Wochenpläne"} />
                    <LeftNavigationItem img={ManageRollIcon} title="Rolle ändern" selected={this.props.selected === "Rolle ändern"} />
                    <LeftNavigationItem img={AddUserIcon} title="Schüler Anlegen" selected={this.props.selected === "Schüler Anlegen"} />
                    <LeftNavigationItem img={ClassroomIcon} title="Klassen verwalten" selected={this.props.selected === "Klassen verwalten"} />
                    
                </div>
                break;
            case roles.LEHRENDE:
                items = <div className="left-navigation-items-container">
                            <LeftNavigationItem img={EventsIcon} title="Ankündigungen" selected={this.props.selected === "Ankündigung"} />
                            <LeftNavigationItem img={SicknessIcon} title="Krankmeldungen" selected={this.props.selected === "Krankmeldung erfassen"} />
                            <LeftNavigationItem img={ScheduleIcon} title="Wochenpläne" selected={this.props.selected === "Wochenplan"} />
                            <LeftNavigationItem img={ExamIcon} title="Prüfungen" selected={this.props.selected === "Prüfungen"} />
                            <LeftNavigationItem img={ClassroomIcon} title="Klassen einsehen" selected={this.props.selected === "Klassen einsehen"} />
                            
                        </div>

                break;
            case roles.LERNENDE:
                items = <div className="left-navigation-items-container">
                    <LeftNavigationItem img={EventsIcon} title="Ankündigungen" selected={this.props.selected === "Ankündigung"} />
                    <LeftNavigationItem img={ScheduleIcon} title="Wochenplan" selected={this.props.selected === "Wochenplan"} />
                    <LeftNavigationItem img={GradesIcon} title="Noten einsehen" selected={this.props.selected === "Noten einsehen"} />
                    {/* <LeftNavigationItem img={PresenceIcon} title="Präsenz anzeigen" selected={this.props.selected === "Anwesenheit"} />
                    <LeftNavigationItem img={SchemaIcon} title="Notenschema" selected={this.props.selected === "Schema"} /> */}
                </div>
                
                break;
            default:
                void (0);

        }

        return (
            <div className="left-navigation-container">
                <div className="left-navigation-title-container">
                    <p className="left-navigation-title"><b className="v">V</b>erwaltungsplattform Schule</p>
                </div>
                {items}
            </div>
        )
    }



}