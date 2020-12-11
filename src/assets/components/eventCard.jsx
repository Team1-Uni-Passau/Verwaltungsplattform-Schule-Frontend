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
    }

    componentDidMount() {
        this.setState({
            text: TESTDATA.EVENTTEXT
        })
    }

    showMore(){
        this.setState({
            MAX_LENGTH: TESTDATA.EVENTTEXT.length
        })
    }

    showLess(){
        this.setState({
            MAX_LENGTH: 500
        })
    }

    onSave(input){
        this.setState({
            text: input
        })
    }


    render() {
        return (
            <div className="event-card-container">
                <p className="event-card-title">Ankündigung</p>
                <div className="event-card-text">
                    <EdiText
                        type='textarea'
                        inputProps={{
                            className: 'textarea',
                            placeholder: 'Type your content here',
                            style: {
                            outline: 'none',
                            minWidth: '95%',
                            height: '150px',
                            },
                            rows: 30,
                        }}
                        editButtonContent="Modifizieren"
                        editButtonClassName="custom-edit-button"
                        value= {this.state.text.length > this.state.MAX_LENGTH ? (
                            this.state.text.substring(0, this.state.MAX_LENGTH) + "..."             
                        )
                        : this.state.text}
                        onSave={(input) => this.onSave(input)}
                    />
                    <div className="show-more" onClick={this.showMore} style={TESTDATA.EVENTTEXT.length >this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Erweitern</div>
                    <div className="show-more" onClick={this.showLess} style={TESTDATA.EVENTTEXT.length === this.state.MAX_LENGTH ? void(0) : {display:'none'}}>Weniger anzeigen</div>
                </div>
            </div>
        )
    }



}
