import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css';
import GradesTable from '../../../assets/components/grades-table';

export default class grades extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Noten" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="grades-title">Ansicht der Noten von: Max Mustermann</div>
                        <GradesTable/>
                    </div>
                </div>
            </div>
        )
    }



}