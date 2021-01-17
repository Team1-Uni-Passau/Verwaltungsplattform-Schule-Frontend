import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css'
import PresenceTable from '../../../assets/components/presence-table';

export default class presence extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Anwesenheit" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="grades-title">Ansicht der letzten Präsenz Einträge</div>

                        {/* <div className="legend">
                            <p style={{color:'green'}}>Nicht anwesend, Krankmeldung eingereicht</p>
                            <p style={{color:'red'}}>Nicht anwesend, Krankmeldung nicht eingereicht</p>
                            <p style={{color:'white'}}>Anwesend</p>
                        </div> */}

                        <PresenceTable/>
                    </div>
                </div>
            </div>
        )
    }



}