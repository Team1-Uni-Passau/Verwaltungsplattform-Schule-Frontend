import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/parents.css';
import TopBar from '../../../assets/components/topBar';
import SicknoteForm from '../../../assets/components/sicknoteForm';


export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            date: null
        }
    }


    async createNewSicknote(date) {
        await fetch('http://localhost:10000/eltern/krankmeldungen/neuekrankmeldung', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
            body: JSON.stringify({
                parentId: 44,
                date: date
            })
        }).then(response => response.text())
          .then(data =>{
              console.log(data)
        })
    }



    render() {
        return (
            <div className="parents-home">
         

                <LeftNavigation selected="Krankmeldung erfassen" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <SicknoteForm sendSicknoteClicked={(date) => this.createNewSicknote(date)}/>
                    </div>
                </div>
            </div>
        )
    }



}