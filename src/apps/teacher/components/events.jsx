import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 


export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            events: []
        }

        this.fetchEvents = this.fetchEvents.bind(this);
        this.renderEvents = this.renderEvents.bind(this);

    }

    componentDidMount() {
        this.fetchEvents();
    }

    async fetchEvents() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL : PATHS.REACT_APP_PATH_PROD + '/lehrender/ankuendigungen/'+JSON.parse(localStorage.getItem("loggedIn")).userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
            this.setState({
                events: data
            })
        })
    }

    renderEvents() {
        return (
            <div className="events-grid">
                {this.state.events ? (
                    this.state.events.map((event) => {
                        console.log(event)
                        return <EventCard 
                                    key={event.idNotification} 
                                    text = {event.content}
                                    id = {event.idNotification}
                                    role = {event.rolle}
                                    startDate = {event.startdate}
                                    endDate = {event.enddate}
                                    display = {true}
                                />
                    }))
                : void(0)};  
            </div>
    )         
}




    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Ankündigung" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <p className="grades-title">Ankündigungen</p>
                        <div>
                            {this.renderEvents()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}