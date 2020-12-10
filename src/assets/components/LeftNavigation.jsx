import React from 'react';
import '../stylesheets/LeftNavigation.css';
import LeftNavigationItem from './leftNavigationItem';
import EventsIcon from '../images/events-icon.png';
import SicknessIcon from '../images/sickness-icon.png';
import ScheduleIcon from '../images/week-plan.png';

export default class LeftNavigation extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="left-navigation-container">
                <div className="left-navigation-title-container">
                    <p className="left-navigation-title"><b className="v">V</b>erwaltungsplattform Schule</p>
                </div>
                <div className="left-navigation-items-container">
                    <LeftNavigationItem img={EventsIcon} title="Ankündigungen" selected = {this.props.selected === "Ankündigung"}/>
                    <LeftNavigationItem img={SicknessIcon} title="Krankmeldungen" selected = {this.props.selected === "Krankmeldungen"}/>
                    <LeftNavigationItem img={ScheduleIcon} title="Wochenpläne" selected = {this.props.selected === "Wochenpläne"} />                
                </div>
            </div>
        )
    }



}