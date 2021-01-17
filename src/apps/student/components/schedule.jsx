import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../../parent/stylesheets/parents.css';
import ScheduleComponent from './scheduleComponent';

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }




    render() {

        return (
            <div className="parents-home">
                <LeftNavigation selected="Wochenplan" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="demo">
                            <ScheduleComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}



