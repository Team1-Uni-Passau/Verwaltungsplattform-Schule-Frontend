import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'

export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            events: [],
            displayModal: false,
            searchText: '',
        }

        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.fetchEvents = this.fetchEvents.bind(this);
        this.renderEvents = this.renderEvents.bind(this); 
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


    renderEvents() {
        return (
            <div className="events-grid">
                {this.state.events ? (
                    this.state.events.map((event) => {
                        return <EventCard 
                                    key={event.id} 
                                    text = {event.content}
                                    role = {event.role}
                                    display = {this.isSubstringOf(event.content) ? true : false }  
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
                </Modal>
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