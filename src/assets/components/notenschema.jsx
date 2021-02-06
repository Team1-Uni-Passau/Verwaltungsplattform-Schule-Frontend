import React from 'react';
import * as PATHS from '../../apps/GlobalConstants';
import { ToastContainer, toast } from 'react-toastify';

export default class Notenschema extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }

        this.submitSchema = this.submitSchema.bind(this)
    }

    onClassIdChange(e) {
        this.classId = e.target.value;
    }

    onWrittenGradeChange(e) {
        this.writtenGrade = e.target.value;

    }

    onWrittenEvaluationChange(e) {
        this.writtenEvaluation = e.target.value;

    }

    onOralGradeChange(e) {
        this.oralGrade = e.target.value;

    }

    onOralEvaluationChange(e) {
        this.oralEvaluation = e.target.value;

    }
    
    async submitSchema() {
        console.log(JSON.parse(localStorage.getItem("loggedIn")).userId)
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/noten/neuesnotenschema' : PATHS.REACT_APP_PATH_PROD + '/lehrender/noten/neuesnotenschema', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
            body: JSON.stringify({
                teacherId: JSON.parse(localStorage.getItem("loggedIn")).userId,
                classId: this.classId,
                writtenNumber: this.writtenGrade,
                writtenEvaluation: this.writtenEvaluation,
                oralNumber: this.oralGrade,
                oralEvaluation: this.oralEvaluation,
            })
        }).then(response => response.text())
          .then(data =>{
            if(data.includes("Das Notenschema wurde angelegt")){
                toast.success("Notenschema erfolgreich angelegt.")
            } else {
                toast.error("Sie haben schon eine Notenschema für diese Klasse erstellt")
            }
        })
    }




    render() {


        return (
            <div className="sicknote-form-container"> 
                <ToastContainer
                    position="top-center"
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <div className="sicknote-form-title">Notenschema erstellen</div>
                <div className="input-container-sicknote-form">
                    <input className="sicknote-form-input" placeholder="Klassen id" onChange ={(e) => this.onClassIdChange(e)}></input>
                    <input className="sicknote-form-input" placeholder="Schriftliche Note" onChange ={(e) => this.onWrittenGradeChange(e)}></input>
                    <input className="sicknote-form-input" placeholder="Shriftliche Evaluierung " onChange ={(e) => this.onWrittenEvaluationChange(e)}></input>
                    <input className="sicknote-form-input" placeholder="Mündliche Note" onChange ={(e) => this.onOralGradeChange(e)}></input>
                    <input className="sicknote-form-input" placeholder="Mündliche Evaluierung" onChange ={(e) => this.onOralEvaluationChange(e)}></input>
                </div>
                <button className="submit-button-sicknote" onClick={this.submitSchema}>SENDEN</button>
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




