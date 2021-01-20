import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import "../stylesheets/teacher.css";
import ExamsTable from '../../../assets/components/exams-table';
import Modal from '../../../assets/components/modal'
import DatePicker from 'react-datepicker';
import * as PATHS from '../../GlobalConstants';



export default class Exams extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            displayModal: false,
            date: null,
            class: '',
            hour: '',
            subject: '',
            type: 'Schriftlich'
        }

        this.displayModal = this.displayModal.bind(this)
        this.undisplayModal = this.undisplayModal.bind(this)
        this.onClassIdChange = this.onClassIdChange.bind(this)
        this.onSubjectChange = this.onSubjectChange.bind(this)
        this.onHourChange = this.onHourChange.bind(this)
        this.onExamTypeChange = this.onExamTypeChange.bind(this)
        this.createExam = this.createExam.bind(this)

    }


    async createExam () {
            await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/neuepruefung' : PATHS.REACT_APP_PATH_PROD + '/lehrender/neuepruefung', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                },
                body: JSON.stringify({
                    teacherId: 26,
                    classId: this.state.class,
                    subject: this.state.subject,
                    hour: this.state.hour,
                    date: this.state.date,
                    type: this.state.type

                })

            }).then(response => response.json())
              .then(data =>{
                  console.log(data)

            })     
    }

    undisplayModal() {
        this.setState({
            displayModal: false
        }
        )
    }

    displayModal() {
        this.setState({
            displayModal: true
        }
        )
    }

    onDateChange(e) {
        this.setState({
            date: e
        })
    }


    onClassIdChange(e) {
        this.setState({
            class: e.target.value
        })
    }

    onHourChange(e) {
        this.setState({
            hour: e.target.value
        })
    }

    onSubjectChange(e) {
        this.setState({
            subject: e.target.value
        })
    }

    onClassIdChange(e) {
        this.setState({
            class: e.target.value
        })
    }

    onExamTypeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }


    render() {
        return (
            <div className="teacher-home">
                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <h1 className="create-event-title">Prüfung erstellen</h1>
                    <div className="create-stunde" style={{textAlign:'center'}}>
                        <input className="create-wochenplan-by-id" placeholder="ID der Klasse" onChange={(e) => this.onClassIdChange(e)}></input>
                        <input className="create-wochenplan-by-id" placeholder="Stunde" onChange={(e) => this.onHourChange(e)}></input>
                        <input className="create-wochenplan-by-id" placeholder="Fach"  onChange={(e) => this.onSubjectChange(e)}></input>
                        <DatePicker
                                className="datepicker-create-event" 
                                placeholderText='YYYY-MM-DD'
                                dateFormat='yyyy-MM-dd'
                                id='date'
                                autoComplete='off'
                                selected={this.state.date}
                                onChange={(e) => this.onDateChange(e)}
                                style={{height: '30px'}}
                                placeholderText= "Datum"
                            />
                        <select className="create-event-role" id="type"  onChange = {(e) => this.onExamTypeChange(e)}>
                                        <option value="Schriftlich">Schriftlich</option>
                                        <option value="Mündlich">Mündlich</option>
                        </select>

                        <button className="confirm-create-event" style={{marginTop:"20px"}} onClick={this.createExam}>Prüfung erstellen</button>

                    </div>

                </Modal>

                <LeftNavigation selected="Prüfungen" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <p className="grades-title">Erstellte Prüfungen</p>
                        <ExamsTable/>
                        <button className="create-event" onClick={this.displayModal} >+</button>
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