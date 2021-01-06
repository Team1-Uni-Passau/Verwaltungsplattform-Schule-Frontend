import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css'
import PresenceTable from '../../../assets/components/presence-table';

export default class presence extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }

        this.getPresenceForStudent = this.getPresenceForStudent.bind(this);
    }

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem("loggedIn")).userId)
        this.getPresenceForStudent();
    }

    async getPresenceForStudent() {
        await fetch('http://localhost:10000/eltern/praesenz/44', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
          
        })
    }




    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Anwesenheit" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="grades-title">Ansicht der letzten 30 Präsenz Einträge Max Mustermann</div>
                        <PresenceTable/>
                    </div>
                </div>
            </div>
        )
    }



}