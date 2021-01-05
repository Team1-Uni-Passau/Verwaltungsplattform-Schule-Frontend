import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css'
import Demo from './Demo';

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }

        this.getWeeklySchedule = this.getWeeklySchedule.bind(this);
    }

    componentDidMount() {
        this.getWeeklySchedule();
    }


    async getWeeklySchedule() {
        console.log(JSON.parse(localStorage.getItem("loggedIn")).token)
        await fetch('http://localhost:10000/eltern/wochenplan/30', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.text())
          .then(data =>{
              console.log(data)
          
        })
    }




    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Wochenplan" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <div className="demo">
                            <Demo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}