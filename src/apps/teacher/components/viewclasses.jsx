import { CompassCalibrationOutlined } from '@material-ui/icons';
import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import "../stylesheets/teacher.css";
import * as PATHS from '../../GlobalConstants';
import Modal from '../../../assets/components/modal'
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';

export default class viewClass extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            class: [],
            displayAbsenceModal: false,
            studentIdToMarkAbsent: '',
            classId: '',
            sicknessNoteSubmitted: '',
            date: new Date(),
        }

        this.viewclass = this.viewclass.bind(this);
        this.postAbsence = this.postAbsence.bind(this);
        this.displayAbsenceModal = this.displayAbsenceModal.bind(this)
        this.undisplayAbsenceModal = this.undisplayAbsenceModal.bind(this)
        this.onIdStudentChange = this.onIdStudentChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onSicknoteChange = this.onSicknoteChange.bind(this)
    }
    

    async viewclass() {
        var x = document.getElementById("classId").value
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/klassenliste/' + x  : PATHS.REACT_APP_PATH_PROD + '/lehrender/klassenliste/' + x, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + JSON.parse(localStorage.getItem("loggedIn")).token,
            }, 
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
              this.setState({
                class: data
                

        })
        if(data.length == 0){
            console.log("fehler")
            alert("Die von ihnen gewählte Klasse enthält keine Schüler oder existiert nicht.")
        }
    })
    }

   
    

    async postAbsence() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/klassenliste/abwesenheiteintragen'  : PATHS.REACT_APP_PATH_PROD + '/lehrender/klassenliste/abwesenheiteintragen', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + JSON.parse(localStorage.getItem("loggedIn")).token,
            }, 
            body: JSON.stringify({
                userId: this.state.studentIdToMarkAbsent,
                date: this.state.date,
                presence: false,
                confirimation: this.state.sicknessNoteSubmitted === 'JA' ? true : false,
                lesson: this.state.classId
            })
        }).then((response) => response.json())
        .then(data => {
            let classe = this.state.class;
            let newClass = classe.filter(item => {
                if (item.id === data.id) {
                    item.presence = false;
                    return item;
                }
               else return item;
            })
            console.log(newClass)
            if(data.userId === parseInt(this.state.studentIdToMarkAbsent)){
                toast.success("Abwesenheit für benutzer "+this.state.studentIdToMarkAbsent+" wurde erfolgreich gemeldet.")
            } else {
                toast.error("Etwas ist schiefgelaufen.")
            }
            this.setState({
                class: newClass
            })
            this.undisplayAbsenceModal();
        })
    }

    displayAbsenceModal(){
        this.setState({
            displayAbsenceModal: true
        })
    }

    undisplayAbsenceModal(){
        this.setState({
            displayAbsenceModal: false
        })
    }


    onIdStudentChange(e) {
        this.setState({
            studentIdToMarkAbsent: e.target.value
        })
    }

    onIdClassChange(e) {
        this.setState({
            classId: e.target.value
        })
    }

    onSicknoteChange(checked){
        this.setState({
            sicknessNoteSubmitted: checked
        })
    }

    onDateChange(e) {
        this.setState({
            date: e
        })
    }



    render() {
        return (
            <div className="teacher-home">
                <LeftNavigation selected="Klassen einsehen" />
                <ToastContainer
                    position="top-center"
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <Modal show={this.state.displayAbsenceModal} modalClosed={() => this.undisplayAbsenceModal()}>
                    <h1 className="create-event-title">Abwesenheit melden</h1>
                    <div className="create-stunde" style={{textAlign:'center'}}>
                        <input className="create-wochenplan-by-id" placeholder="ID des Lernenders" onChange={(e) => this.onIdStudentChange(e)}></input>
                        <button className="confirm-create-event" style={{marginTop:"20px"}} onClick={this.postAbsence}>Abwesend melden</button>
                    </div>

                </Modal>

                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel-container">
                        <p className="viewclasses-top">Klassen einsehen</p>
                        <input className="searchclass" id="classId" placeholder="Klasse suchen" ></input>
                        <div align="center">
                        <button className="input-button" onClick={this.viewclass}>Klasse anzeigen</button>
                        </div>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>UserId</th>
                                    <th>Vorname</th>
                                    <th>Nachname</th>
                                    <th>Anwesend</th>
                                    <th>Krankmeldung</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.class.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{element.affectedUserId}</td>
                                            <td>{element.firstName}</td>
                                            <td>{element.lastName}</td>
                                            <td>{element.presence ? "Ja" : "Nein"}</td>
                                            <td>{element.confirmation? "Ja" : "Nein"}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div align="center"><button className="input-button" onClick={this.displayAbsenceModal} >Abwesenheit melden</button></div>
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