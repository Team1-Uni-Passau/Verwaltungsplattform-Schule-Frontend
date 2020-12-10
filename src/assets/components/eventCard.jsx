import React from 'react';
import '../stylesheets/eventcard.css';
import TESTDATA from './testdata.json';
import EdiText from 'react-editext'


const MAX_LENGTH = 500;

export default class eventCard extends React.Component {
    
    
    constructor (props){
        super(props);
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
                            height: '150px'
                            },
                            rows: 30,
                        }}
                        editButtonContent="Modifizieren"
                        editButtonClassName="custom-edit-button"
                        value= {TESTDATA.EVENTTEXT.length > MAX_LENGTH ? (
                                TESTDATA.EVENTTEXT.substring(0, MAX_LENGTH) + "..."                
                        )
                        : TESTDATA.EVENTTEXT}
                        onSave={this.onSave}
                    />
                </div>
                <p style={TESTDATA.EVENTTEXT.length > MAX_LENGTH ? void(0): {display:'none'}}>Erweitern</p>
            </div>
        )
    }



}
