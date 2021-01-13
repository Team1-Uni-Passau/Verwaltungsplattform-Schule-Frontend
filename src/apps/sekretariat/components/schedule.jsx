import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import Demo from './Demo';
  

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
        this.getWeeklySchedule();
    }

    async getWeeklySchedule() {
        await fetch('http://localhost:10000/sekretariat/wochenplan/28', {
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
            <div className="sekretariat-home">
                <LeftNavigation selected="Wochenpläne" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container" style={{overflow:'hidden'}}>
                      <div className="demo">
                        <Demo/>
                      </div>
                    </div>
                </div>
            </div>
        )
    }



}