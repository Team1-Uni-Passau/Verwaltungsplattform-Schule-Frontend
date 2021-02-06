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
        this.editEvent = this.editEvent.bind(this);
        this.displayViewByRole = this.displayViewByRole.bind(this);      

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
        if(this.props.editEvent){
            this.props.editEvent(this.props.id);
        }

    }

    displayViewByRole(role) {
        switch(role){
            case "Eltern":
                return(
                    <div>
                        <p className="event-card-title">Ankündigung</p>
                        <div className="event-card-text">
                            {this.props.text.length > this.state.MAX_LENGTH ? (
                                    this.props.text.substring(0, this.state.MAX_LENGTH) + "..."             
                                )
                                : this.props.text}
                            <div className="show-more" onClick={this.showMore} style={this.props.text.length >this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Erweitern</div>
                            <div className="show-more" onClick={this.showLess} style={this.props.text.length === this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Weniger anzeigen</div>
                        </div>
                    </div>
                );
                case "Lernender":
                return(
                    <div>
                        <p className="event-card-title">Ankündigung</p>
                        <div className="event-card-text">
                            {this.props.text.length > this.state.MAX_LENGTH ? (
                                    this.props.text.substring(0, this.state.MAX_LENGTH) + "..."             
                                )
                                : this.props.text}
                            <div className="show-more" onClick={this.showMore} style={this.props.text.length >this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Erweitern</div>
                            <div className="show-more" onClick={this.showLess} style={this.props.text.length === this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Weniger anzeigen</div>
                        </div>
                    </div>
                );
                case "Lehrender":
                    return(
                        <div>
                            <p className="dates-display">Von {this.props.startDate} bis {this.props.endDate}</p>
                            <p className="event-card-title">Ankündigung</p>
                            <div className="event-card-text">
                                {this.props.text.length > this.state.MAX_LENGTH ? (
                                        this.props.text.substring(0, this.state.MAX_LENGTH) + "..."             
                                    )
                                    : this.props.text}
                                <div className="show-more" onClick={this.showMore} style={this.props.text.length >this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Erweitern</div>
                                <div className="show-more" onClick={this.showLess} style={this.props.text.length === this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Weniger anzeigen</div>
                            </div>
                        </div>
                    );
            case "Sekretariat":
                return (
                    <div>
                        <p className="dates-display">Von {this.props.startDate} bis {this.props.endDate}</p>
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
                    
                );
                case "Administrator":
                return (
                    <div>
                        <p className="dates-display">Von {this.props.startDate} bis {this.props.endDate}</p>
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

    render() {
        var view = this.displayViewByRole(JSON.parse(localStorage.getItem("loggedIn")).role);
        
        
        return (
            <div className="event-card-container" style={this.props.display ? void(0) : {display:'none'}}>
                {view}
            </div>
        )
    }



}
