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
                        <div className="grades-title">Ansicht der letzten 30 Präsenz Einträge Max Mustermann</div>
                        <PresenceTable/>
                    </div>
                </div>
            </div>
        )
    }



}