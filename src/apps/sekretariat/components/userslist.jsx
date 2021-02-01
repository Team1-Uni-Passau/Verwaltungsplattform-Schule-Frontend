import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/changeroll.css';
import TopBar from '../../../assets/components/topBar';
import * as PATHS from '../../GlobalConstants';

export default class UsersList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }        
    }

    render() {

        return (
            <div className="home">
                <LeftNavigation selected="Benutzer Anzeigen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
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