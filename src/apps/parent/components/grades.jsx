import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css';
import GradesTable from '../../../assets/components/grades-table';

export default class grades extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
        this.getGradesForStudent = this.getGradesForStudent.bind(this);
    }

    componentDidMount() {
        this.getGradesForStudent();
    }

    async getGradesForStudent() {
        await fetch('http://localhost:10000/eltern/noten/44', {
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
                <LeftNavigation selected="Noten" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="grades-title">Ansicht der Noten von: Max Mustermann</div>
                        <GradesTable/>
                    </div>
                </div>
            </div>
        )
    }



}