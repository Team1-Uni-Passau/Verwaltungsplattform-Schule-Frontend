import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css'
import Demo from './Demo';

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            scheduleData: [],
            appointments: []
        }

        this.getWeeklySchedule = this.getWeeklySchedule.bind(this);
    }

     componentWillMount() {
        this.getWeeklySchedule();
    }


    async getWeeklySchedule() {
        await fetch('http://localhost:10000/eltern/wochenplan/32', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
            this.setState({
                scheduleData: data
            })
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
                            <Demo appointments={this.state.scheduleData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}