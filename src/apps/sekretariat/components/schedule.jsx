import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import Demo from './Demo';
  

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            enteredId: '',
            fetchedWochenplan: []
        }

        this.getWeeklySchedule = this.getWeeklySchedule.bind(this);
        this.onIdEntered = this.onIdEntered.bind(this);
    }
    

    async getWeeklySchedule() {
        if(this.state.enteredId !== '' && this.state.enteredId !== null) {
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
                    fetchedWochenplan: data
                })
            })
    
        }
    }

    onIdEntered(e){
        this.setState({
            enteredId: e.target.value
        })
    }




    render() {

        return (
            <div className="sekretariat-home">
                <LeftNavigation selected="Wochenpläne" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container" style={{overflow:'hidden'}}>
                      <div className="retrieve-wochenplan-container">
                          <input className="retieve-wochenplan-by-id" placeholder="ID des Lehrers oder Klasse" onChange={(e) => this.onIdEntered(e)}></input>
                          <button className="confirm-retrieve-wochenplan" onClick={this.getWeeklySchedule}>Wochenplan anzeigen</button>          
                      </div>
                      <div className="demo">
                        <Demo wochenplan= {this.state.fetchedWochenplan}/>
                      </div>
                    </div>
                </div>
            </div>
        )
    }



}