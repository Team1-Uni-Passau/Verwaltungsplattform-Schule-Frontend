import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/admin.css';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'
import Events from '../../sekretariat/components/events'

export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            displayModal: false
        }

        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);

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

    render() {
        return (
            <div className="admin-home">

                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                </Modal>
                <LeftNavigation selected="Ankündigung" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="search-event-container">
                            <Icon  className='search-icon'   size={'100%'} icon={ic_search}/>
                            <input className="search-event" placeholder="Ankündigung suchen..."></input>
                        </div>

                        <div className="events-grid">
                            
                        </div>

                        <button className="create-event" onClick={this.displayModal}>+</button>
                    </div>
                </div>
            </div>
        )
    }



}