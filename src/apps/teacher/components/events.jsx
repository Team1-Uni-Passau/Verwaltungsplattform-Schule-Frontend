import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 
import * as PATHS from '../../GlobalConstants';
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'
import DatePicker from 'react-datepicker';

export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            events: [],
            displayModal: false,
            startDate: null,
            endDate: null,
            newEventText: '',
            klasse: ''
        }

        this.fetchEvents = this.fetchEvents.bind(this);
        this.renderEvents = this.renderEvents.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onClassIdChange = this.onClassIdChange.bind(this);
        this.createClassEvent = this.createClassEvent.bind(this);

    }

    componentDidMount() {
        this.fetchEvents();
    }

    async fetchEvents() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/ankuendigungen/'+JSON.parse(localStorage.getItem("loggedIn")).userId : PATHS.REACT_APP_PATH_PROD + '/lehrender/ankuendigungen/'+JSON.parse(localStorage.getItem("loggedIn")).userId, {
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

    async createClassEvent() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/neueankuendigungklasse' : PATHS.REACT_APP_PATH_PROD + '/lehrender/neueankuendigungklasse', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
            body: JSON.stringify({
                userId: JSON.parse(localStorage.getItem("loggedIn")).userId,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                content: this.state.newEventText,
                classId: this.state.klasse
            })

        }).then(response => response.json())
        .then(data => {
            var alreadyExistingEvents = this.state.events;
            alreadyExistingEvents.push(data);
            this.setState({
                events: alreadyExistingEvents,
                displayModal: false
            })  
        })

    }

    renderEvents() {
        return (
            <div className="events-grid">
                {this.state.events ? (
                    this.state.events.map((event) => {
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

onStartDateChange(e) {
    this.setState({
        startDate: e
    })
}

onEndDateChange(e) {
    this.setState({
        endDate: e
    })
}


    // Method called to display the registration Modal
    displayModal(){
        this.setState({
            displayModal: true
        })
    }

    // Method to undisplay the registration Modal
    undisplayModal(){
        this.setState({
            displayModal: false,
            modificationStatus: false,
            newEventText: ''
        })
    }

    onClassIdChange(e) {
        this.setState({
            klasse: e.target.value
        })
    }

    onNewEventTextChange = (e) => {
        this.setState({
            newEventText: e.target.value
        })
    }


    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Ankündigung" />
                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="create-event-title">Klassenspezifische Ankündigung</h1>
                        <textarea  className="event-content"  type="text" placeholder="Text der Ankündigung..." onChange={(e) => this.onNewEventTextChange(e)}></textarea>
                        <input className="create-wochenplan-by-id" placeholder="ID der Klasse" onChange={(e) => this.onClassIdChange(e)}></input>
                        <div className="create-event-dates-container">
                            <DatePicker
                                className="datepicker-create-event" 
                                placeholderText='YYYY-MM-DD'
                                dateFormat='yyyy-MM-dd'
                                id='start-date'
                                autoComplete='off'
                                selected={this.state.startDate}
                                style={{height: '30px'}}
                                onChange={(e) => this.onStartDateChange(e)}
                                placeholderText= "Startdatum"
                            />
                            <DatePicker
                                className="datepicker-create-event" 
                                placeholderText='YYYY-MM-DD'
                                dateFormat='yyyy-MM-dd'
                                id='end-date'
                                autoComplete='off'
                                selected={this.state.endDate}
                                style={{height: '30px'}}
                                onChange={(e) => this.onEndDateChange(e)}
                                placeholderText= "Enddatum"
                                
                            />
                        </div>
                        <button className="confirm-create-event" onClick={this.createClassEvent}>Erstellen</button>
                    </div>
                </Modal>

                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <p className="grades-title">Ankündigungen</p>
                        <div>
                            {this.renderEvents()}
                        </div>
                    </div>
                    <button className="create-event" onClick={this.displayModal}>+</button>
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