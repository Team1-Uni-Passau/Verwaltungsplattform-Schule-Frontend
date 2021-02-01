import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../../parent/stylesheets/parents.css';
import TopBar from '../../../assets/components/topBar';
import SicknoteForm from '../../../assets/components/sicknoteForm';
import * as PATHS from '../../GlobalConstants';


export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            sickNoteCreated: false,
            passedTimeLimit: false
        }
    }


    async createNewSicknote() {
        var dateNow = new Date();
        if(dateNow.getHours() >= 9 && dateNow.getHours() < 24) {
            this.setState({
                passedTimeLimit: true,
            })
        } else {
            await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/krankmeldungen/neuekrankmeldung' : PATHS.REACT_APP_PATH_PROD + '/lehrender/krankmeldungen/neuekrankmeldung', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                },
                body: JSON.stringify({
                    teacherId: JSON.parse(localStorage.getItem("loggedIn")).userId,
                })
            }).then(response => response.json())
              .then(data =>{
                if(data.affectedUserId != null){
                    this.setState({
                        sickNoteCreated: true,
                        passedTimeLimit: false
                    })
                } else {
                    this.setState({
                        sickNoteCreated: false,
                        passedTimeLimit: false
                    })
      
                }
            })    
        }
    }



    render() {
        return (
            <div className="parents-home">
         

                <LeftNavigation selected="Krankmeldung erfassen" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <SicknoteForm 
                            sendSicknoteClicked={(date) => this.createNewSicknote(date)} 
                            passedTimeLimit={this.state.passedTimeLimit} 
                            sickNoteCreated={this.state.sickNoteCreated}
                        />
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