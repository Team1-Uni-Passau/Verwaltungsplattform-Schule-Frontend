import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import Demo from './Demo';
import Modal from '../../../assets/components/modal'
import DatePicker from 'react-datepicker';


export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            enteredId: '',
            fetchedWochenplan: [],
            displayModal: false,
            hourToDelete: '',
            clickedButton: '',
            fetchedFor: '',
            confirmedEnteredId: '',
            teacherIdEntered: '',
            classIdEntered: '',
            subjectEntered: '',
            startTimeEntered: '',
            dayEntered: 'Montag',
        }

        this.getWeeklySchedule = this.getWeeklySchedule.bind(this);
        this.onIdEntered = this.onIdEntered.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.onHourToDeleteUpdate = this.onHourToDeleteUpdate.bind(this);
        this.onDeleteHour = this.onDeleteHour.bind(this);
        this.onSelectedDayEntered = this.onSelectedDayEntered.bind(this);
        this.onStartTimeEntered = this.onStartTimeEntered.bind(this);
        this.onTeacherIdEntered = this.onTeacherIdEntered.bind(this);
        this.onSubjectEntered = this.onSubjectEntered.bind(this);
        this.onClassIdEntered = this.onClassIdEntered.bind(this);
        this.createUnterricht = this.createUnterricht.bind(this);

        
    }
    
     isNumeric(value) {
        return /^\d+$/.test(value);
    }


    async createUnterricht() {

        if(this.state.teacherIdEntered !== '' && this.state.classIdEntered !== '' && this.state.subjectEntered !== '' && this.state.startTimeEntered !== '' && this.state.dayEntered !== '') {

            await fetch('http://localhost:10000/sekretariat/wochenplan/neuestunde', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                },
                body: JSON.stringify({
                    teacherId: this.state.teacherIdEntered,
                    classId: this.state.classIdEntered,
                    subject: this.state.subjectEntered,
                    startTime: this.state.startTimeEntered,
                    endTime: this.state.endTimeEntered,
                    day: this.state.dayEntered
                })
            }).then(response => response.json())
              .then(data =>{
                  console.log(data)
                if(this.state.teacherIdEntered === this.state.enteredId || this.state.classIdEntered === this.state.enteredId) {
                    var newSchedule = this.state.fetchedWochenplan;
                    newSchedule = newSchedule.concat(data);
                    this.setState({
                        fetchedWochenplan: newSchedule,
                        displayModal: false
                    })
    
                }   else {
                    this.setState({
                        displayModal: false
                    })

                }              
            })

        }

    }

    async getWeeklySchedule() {
        if(this.state.enteredId !== '' && this.state.enteredId !== null) {
            if( this.isNumeric(this.state.enteredId)) {
                await fetch('http://localhost:10000/sekretariat/wochenplan/'+this.state.enteredId, {
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
                        fetchedWochenplan: data,
                        fetchedFor: "lehrer",
                        confirmedEnteredId: this.state.enteredId
                    })
                })
        
            } else {
                await fetch('http://localhost:10000/sekretariat/wochenplan/klasse/'+this.state.enteredId, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                    },
                }).then(response => response.json())
                  .then(data =>{
                    this.setState({
                        fetchedWochenplan: data,
                        fetchedFor: "class",
                        confirmedEnteredId: this.state.enteredId
                    })
                })

            }
    
        }
    }


    async onDeleteHour() {
        if(this.state.hourToDelete !== '' && this.state.hourToDelete !== null) {
            await fetch('http://localhost:10000/sekretariat/wochenplan/stunde/'+this.state.hourToDelete+'/loeschen/', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
                },
            }).then(response => response.text())
              .then(data =>{
                const oldSchedule = this.state.fetchedWochenplan
                const newSchedule = oldSchedule.filter((item) => {
                     return item.lessonId !== Number(this.state.hourToDelete);
                })

                this.setState({
                    displayModal: false,
                    fetchedWochenplan: newSchedule,
                })
            })
    
        }
    }


    onIdEntered(e){
        this.setState({
            enteredId: e.target.value
        })
    }

    onHourToDeleteUpdate(e){
        this.setState({
            hourToDelete: e.target.value
        })
    }


        undisplayModal(){
            this.setState({
                displayModal: false,
            })
        }
    
    // Method called to display the registration Modal
    displayModal(type){
        switch(type){
            case "delete":
                this.setState({
                    displayModal: true,
                    clickedButton: 'delete'
                })
            break;
            case "create": 
                this.setState({
                    displayModal: true,
                    clickedButton: 'create'
                })
            break;
            default:
                this.setState({
                    displayModal: true,
                })
        }
    }

    onTeacherIdEntered(e) {
        this.setState({
            teacherIdEntered: e.target.value
        })
    }


    onClassIdEntered(e) {
        this.setState({
            classIdEntered: e.target.value
        })
    }

    onSubjectEntered(e) {
        this.setState({
            subjectEntered: e.target.value
        })
    }

    onStartTimeEntered(e) {
        this.setState({
            startTimeEntered: e.target.value
        })
    }


    onSelectedDayEntered(e) {
        this.setState({
            dayEntered: e.target.value
        })
    }





    render() {

        var {fetchedWochenplan} = this.state;
        var ModalView = null;
        switch (this.state.clickedButton){
            case "delete":
                ModalView = <div>
                                <h1 className="create-event-title">Stunde löschen</h1>
                                    <div style={{textAlign:'center'}}>
                                        {fetchedWochenplan.map((stunde) => {
                                            return (
                                                <div key={stunde.lessonId}>
                                                    {stunde.day}: {stunde.startTime} bis {stunde.endTime} ({stunde.subject}) : <b style={{fontSize:'14px'}}>ID = {stunde.lessonId}</b>
                                                </div>
                                            )
                                        })}
                                        <div style={{marginTop:'40px'}}>Bitte geben Sie die ID der zu löschenden Stunde ein</div>
                                        <div className="retrieve-wochenplan-container">
                                            <input className="retieve-wochenplan-by-id" placeholder="ID der Stunde" onChange={(e) => this.onHourToDeleteUpdate(e)}></input>
                                            <button className="remove-hour-wochenplan" onClick={this.onDeleteHour}>Stunde löschen</button>          
                                        </div>
                                    </div>      
                            </div>
            break;
            case "create":
                ModalView = <div>
                                <h1 className="create-event-title">Stunde hinzufügen</h1>
                                    <div className="create-stunde" style={{textAlign:'center'}}>
                                        <input className="create-wochenplan-by-id" placeholder="Lehrender ID" onChange={(e) => this.onTeacherIdEntered(e)}></input>
                                        <input className="create-wochenplan-by-id" placeholder="ID der Klasse" onChange={(e) => this.onClassIdEntered(e)}></input>
                                        <input className="create-wochenplan-by-id" placeholder="Fach"  onChange={(e) => this.onSubjectEntered(e)}></input>
                                        <label htmlFor="startTime"  style={{marginRight: '5px'}}>Start: </label>
                                        <input type="time" placeholder="Start" id="startTime"  onChange={(e) => this.onStartTimeEntered(e)}></input>

                                        <select className="create-hour-day" id="day" onChange={(e) => this.onSelectedDayEntered(e)} >
                                            <option value="Montag">Montag</option>
                                            <option value="Dienstag">Dienstag</option>
                                            <option value="Mittwoch">Mittwoch</option>
                                            <option value="Donnerstag">Donnerstag</option>
                                            <option value="Freitag">Freitag</option>
                                        </select>
                                        <button className="confirm-retrieve-wochenplan" style={{justifySelf:'center',marginTop:'10px'}} onClick={this.createUnterricht}>Stunde erstellen</button>          

                                    </div>      
                            </div>
            break;
        }

        return (
            <div className="sekretariat-home">
                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()} >
                    {ModalView}
                </Modal>

                <LeftNavigation selected="Wochenpläne" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container" style={{overflow:'auto'}}>
                      <div className="retrieve-wochenplan-container">
                          <input className="retieve-wochenplan-by-id" placeholder="ID des Lehrers oder Klasse" onChange={(e) => this.onIdEntered(e)}></input>
                          <button className="confirm-retrieve-wochenplan" onClick={this.getWeeklySchedule}>Wochenplan anzeigen</button>          
                      </div>
                      <div className="grades-title" style={this.state.fetchedFor.length > 0 ? void(0) : {display:'none'}}>Ansicht des Wochenplans von {this.state.fetchedFor === 'lehrer' ? "Lehrer" : this.state.fetchedFor === 'class' ? "Klasse" : void(0)} mit ID {this.state.confirmedEnteredId}</div>
                      <div className="demo">
                        <Demo wochenplan= {fetchedWochenplan}/>
                      </div>
                      <div className="editing-buttons">
                        <button className="remove-hour-wochenplan" onClick={() => this.displayModal('delete')}>Stunde löschen</button>          
                        <button className="confirm-retrieve-wochenplan" onClick={() => this.displayModal('create')}>Stunde hinzufügen</button>          
                      </div>
                    </div>
                </div>
            </div>
        )
    }



}