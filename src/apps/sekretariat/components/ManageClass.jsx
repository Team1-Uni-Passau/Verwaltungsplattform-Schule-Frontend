import { Button } from 'bootstrap';
import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';


export default class events extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNutzerIDChange = this.handleNutzerIDChange.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.confirm = this.confirm.bind(this);

    }

    handleClassChange(e) {
        this.class = e.target.value;
    }

    handleFirstNameChange(e) {
        this.firstname = e.target.value;
    }
    handleNameChange(e) {
        this.name = e.target.value;
    }
    handleNutzerIDChange(e) {
        this.NutzerID = e.target.value;
    }
    handleEmailChange(e){
        this.eMail = e.target.value;
    }

    async confirm(){
        
        

        await fetch('http://localhost:10000/sekretariat/klassenliste/keineklasse/klassehinzufuegen', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        studentId: this.NutzerID,
                        classId: this.class,
                       
                        
              
            })
    })
}




    render() {
        return (
            <div className="sekretariat-home">
                <LeftNavigation selected="Klassen verwalten" />
                <div className="flex-right-container">
                    <TopBar />
                    
                        
                        <div className="ManageClassBox">
                        <p className="ManageClassTop">Klasse Zuweisen</p>
                            
                            {/* <input className="ManageClassInput" type="text" placeholder="Name" onChange={(e) => this.handleNameChange(e)}></input>
                            <input className="ManageClassInput" type="text" placeholder="Vorname" onChange={(e) => this.handleFirstNameChange(e)}></input> */}
                            <input className="ManageClassInput" type="text" placeholder="Nutzer ID" onChange={(e) => this.handleNutzerIDChange(e)}></input>
                            {/* <input className="ManageClassInput" type="text" placeholder="E-mail" onChange={(e) => this.handleEmailChange(e)}></input> */}
                            <input className="ManageClassInput" type="text" placeholder="Klasse" onChange={(e) => this.handleClassChange(e)}></input>
                            <button className="ConfirmButton" onClick={this.confirm}>Bestätigen</button>

                        
                    </div>
                </div>
            </div>
        )
    }



}