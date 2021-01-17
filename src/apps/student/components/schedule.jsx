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



