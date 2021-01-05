import React from 'react';
import '../stylesheets/eventcard.css';
import TESTDATA from './testdata.json';
import EdiText from 'react-editext'


 

export default class eventCard extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state= {
            MAX_LENGTH : 500,
            text: ''
        }

        this.showMore = this.showMore.bind(this);
        this.showLess = this.showLess.bind(this);
        this.onSave = this.onSave.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    componentWillMount() {
    }

    // Handling of showing more test in the user event
    showMore(){
        this.setState({
            MAX_LENGTH: TESTDATA.EVENTTEXT.length
        })
    }


    // Handling of showing less test in the user event
    showLess(){
        this.setState({
            MAX_LENGTH: 500
        })
    }

    // Save the new value after a user modifies a text
    onSave(input){
        this.setState({
            text: input
        })
    }

    deleteEvent() {
        if(this.props.deleteEvent) {
            this.props.deleteEvent(this.props.id);
        }
    }

    editEvent() {

    }


    render() {

        
        return (
            <div className="event-card-container" style={this.props.display ? void(0) : {display:'none'}}>
                <p className="event-card-title">Ankündigung für {this.props.role !== null ? this.props.role : "Alle"}</p>
                <div className="event-card-text">
                     {this.props.text.length > this.state.MAX_LENGTH ? (
                            this.props.text.substring(0, this.state.MAX_LENGTH) + "..."             
                        )
                        : this.props.text}
                    <div className="show-more" onClick={this.showMore} style={this.props.text.length >this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Erweitern</div>
                    <div className="show-more" onClick={this.showLess} style={this.props.text.length === this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Weniger anzeigen</div>
                    <div className="event-buttons-flex">
                        <button className="modify-event" onClick={this.editEvent}>Bearbeiten</button>
                        <button className="delete-event" onClick={this.deleteEvent}>Löschen</button>
                    </div>
                </div>
            </div>
        )
    }



}
