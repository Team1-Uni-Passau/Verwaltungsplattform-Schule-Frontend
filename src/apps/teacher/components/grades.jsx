import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/teacher.css';
import TopBar from '../../../assets/components/topBar';
import * as PATHS from '../../GlobalConstants';

export default class Grades extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            GradeInvalid: false,
            UserIdInvalid: false,
            ExamIdInvalid: false,
        }
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handlegradeChange = this.handlegradeChange.bind(this);
        this.handleExamIdChange = this.handleExamIdChange.bind(this);

        this.grades = this.grades.bind(this);

    }


    handleUserIdChange(e) {
        this.userId = e.target.value;
    }
    handlegradeChange(e) {
        this.grade = e.target.value;
    }
    handleExamIdChange(e) {
        this.examId = e.target.value;
    }


    async grades() {

        if (!this.userId) {
            this.setState({
                UserIdInvalid: true
            })
        } else {
            this.setState({
                UserIdInvalid: false
            })
        }
        if (!this.grade) {
            this.setState({
                GradeInvalid: true
            })
        } else {
            this.setState({
                GradeInvalid: false
            })
        }
        if (!this.examId) {
            this.setState({
                ExamIdInvalid: true
            })
        } else {
            this.setState({
                ExamIdInvalid: false
            })
        }
        console.log(this.state.GradeInvalid)
        if (this.userId && this.grade && this.examId) {
            console.log(this.userId)
            await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/noten/eintragen' : PATHS.REACT_APP_PATH_PROD + '/lehrender/noten/eintragen', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + JSON.parse(localStorage.getItem("loggedIn")).token,
                },
                body: JSON.stringify({
                    userId: this.userId,
                    examId: this.examId,
                    grade: this.grade,

                })
                    })
                    .then(res => res.text())
                    .then(text => {
                        console.log(text)
                        if (text == "") {
                            alert("Es ist ein Fehler aufgetreten. Bitte Kontrollieren sie die Eingabe")
                        }
                        else {
                            alert(text)
                            location.reload()
                        }
                    })

            

        }
    }


    render() {

        return (
            <div className="admin-home">
                <LeftNavigation selected="Noten eintragen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
                        <div className="create-user-box">
                            <p className="create-user-top">Note eintragen</p>
                            <div className="create-user-input-container">
                                <input className="create-user-input" type="text" placeholder="User Id" onChange={(e) => this.handleUserIdChange(e)} style={this.state.UserIdInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.UserIdInvalid ? void (0) : { display: 'none' }}>Bitte geben sie eine ID ein.</p>
                                <input className="create-user-input" type="text" placeholder="Prüfungs Nr." onChange={(e) => this.handleExamIdChange(e)} style={this.state.ExamIdInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.ExamIdInvalid ? void (0) : { display: 'none' }}>Bitte geben sie eine Prüfungsnummer ein.</p>
                                <input className="create-user-input" type="text" placeholder="Note" onChange={(e) => this.handlegradeChange(e)} style={this.state.GradeInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                                <p className="form-validation-registration" style={this.state.GradeInvalid ? void (0) : { display: 'none' }}>Bitte geben sie eine Note ein.</p>
                                <button className="confirm-button" onClick={this.grades}>Bestätigen</button>
                            </div>
                        </div>
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