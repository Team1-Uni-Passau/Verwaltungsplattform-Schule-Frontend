import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 

export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }




    render() {
        return (
            <div className="sekretariat-home">
                <LeftNavigation selected="Ankündigung" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="search-event-container">
                            <input className="search-event" placeholder="Ankündigung suchen..."></input>
                            <div className="events-grid">
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>
                                <EventCard/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}