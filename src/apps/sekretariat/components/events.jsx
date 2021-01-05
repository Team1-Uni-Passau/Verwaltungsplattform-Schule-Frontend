import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'
import DatePicker from 'react-datepicker';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            events: [],
            displayModal: false,
            searchText: '',
            startDate: null,
            endDate: null,
            newEventText: '',
            newEventSelectedRole: null,
            openDialog: false,
            eventIdToDelete: null
        }

        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.fetchEvents = this.fetchEvents.bind(this);
        this.renderEvents = this.renderEvents.bind(this); 
        this.handleCreateEvent = this.handleCreateEvent.bind(this); 
        this.deleteEventDialog = this.deleteEventDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.confirmDeleteEvent = this.confirmDeleteEvent.bind(this);

    }

    componentDidMount() {
        this.fetchEvents();
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
            displayModal: false
        })
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

    async handleCreateEvent () {
            if(this.state.newEventSelectedRole == 'Alle') {
                await fetch('http://localhost:10000/sekretariat/neueankuendigungallgemein', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                    },
                    body: JSON.stringify({
                        userId: 26,
                        startDate: this.state.startDate,
                        endDate: this.state.endDate,
                        content: this.state.newEventText
    
                    })
    
                }).then(response => response.json())
                  .then(data =>{
                    var alreadyExistingEvents = this.state.events;
                    alreadyExistingEvents.push(data);
                    this.setState({
                        events: alreadyExistingEvents
                    })  
                })     
            }

            if(this.state.newEventSelectedRole == 'Lehrender' || this.state.newEventSelectedRole == 'Lernender' || this.state.newEventSelectedRole == 'Eltern' || this.state.newEventSelectedRole == 'Sekretariat'){
                await fetch('http://localhost:10000/sekretariat/neueankuendigungrolle', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                    },
                    body: JSON.stringify({
                        userId: 26,
                        startDate: this.state.startDate,
                        endDate: this.state.endDate,
                        role: this.state.newEventSelectedRole,
                        content: this.state.newEventText
    
                    })
    
                }).then(response => response.json())
                  .then(data =>{
                    var alreadyExistingEvents = this.state.events;
                    alreadyExistingEvents.push(data);
                    this.setState({
                        events: alreadyExistingEvents
                    })  
                })     

            }
            

            this.undisplayModal();
            
    }



    async fetchEvents() {
        await fetch('http://localhost:10000/sekretariat/alleankuendigungen', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
            this.setState({
                events: data
            })
        })
    }

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    onNewEventTextChange = (e) => {
        this.setState({
            newEventText: e.target.value
        })
    }

    onNewEventRoleChange = (e) => {
        this.setState({
            newEventSelectedRole: e.target.value
        })
    }



    isSubstringOf(text) {

        if(this.state.searchText == '') {
            return true;
        }

        if (this.state.searchText !== null && this.state.searchText !== ''){
            if (text.toLowerCase().replace(/\s/g, '').includes(this.state.searchText.toLowerCase().replace(/\s/g, ''))) {
                return true;
            }    
        }

        return false;
    }

    deleteEventDialog(id){
        this.setState({
            eventIdToDelete: id,
            openDialog: true
        })
    }

    closeDialog(){
        this.setState({
            openDialog: false
        })
    }

    async confirmDeleteEvent() {

        this.closeDialog();

        await fetch('http://localhost:10000/sekretariat/ankuendigungloeschen/'+this.state.eventIdToDelete, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.text())
          .then(data =>{
            var currentEvents = this.state.events;
            const newEventsList = currentEvents.filter(element => element.id !== this.state.eventIdToDelete);
            this.setState({
                events: newEventsList
            })
        })
    }


    renderEvents() {
        return (
            <div className="events-grid">
                {this.state.events ? (
                    this.state.events.map((event) => {
                        return <EventCard 
                                    key={event.id} 
                                    text = {event.content}
                                    id = {event.id}
                                    role = {event.role}
                                    display = {this.isSubstringOf(event.content) ? true : false }  
                                    deleteEvent = {(id) => this.deleteEventDialog(id)}
                                />
                    }))
                : void(0)};  
            </div>
    )         
}


    render() {
        return (
            <div className="sekretariat-home">

                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="create-event-title">Ankündigung erstellen</h1>
                        <textarea  className="event-content"  type="text" placeholder="Text der Ankündigung..." onChange={(e) => this.onNewEventTextChange(e)}></textarea>
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
                        
                        <select className="create-event-role" id="rolle" onChange = {(e) => this.onNewEventRoleChange(e)}>
                                        <option value="--">Sichtbar für:</option>
                                        <option value="Sekretariat">Sekretariat</option>
                                        <option value="Lehrender">Lehrender</option>
                                        <option value="Lernender">Lernender</option>
                                        <option value="Eltern">Eltern</option>
                                        <option value="Alle">Alle</option>
                        </select>


                        <button className="confirm-create-event" onClick={this.handleCreateEvent}>Erstellen</button>


                    </div>
                </Modal>

                <Dialog
                    open={this.state.openDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.closeDialog}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Ankündigung löschen?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Sind Sie sicher, dass Sie folgende Ankündigung löschen wollen?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.confirmDeleteEvent} color="primary">
                        Bestätigen
                    </Button>
                    <Button onClick={this.closeDialog} color="primary">
                        Abbrechen
                    </Button>
                    </DialogActions>
                </Dialog>

                <LeftNavigation selected="Ankündigung" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="search-event-container">
                            <Icon  className='search-icon'   size={'100%'} icon={ic_search}/>
                            <input className="search-event" placeholder="Ankündigung suchen..." onChange={(e) => this.handleSearch(e)}></input>
                        </div>

                        <div>
                            {this.renderEvents()}
                        </div>

                        <button className="create-event" onClick={this.displayModal}>+</button>
                    </div>
                </div>
            </div>
        )
    }



}