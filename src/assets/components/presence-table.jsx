import React from 'react';
import '../stylesheets/grades-table.css';

export default class PresenceTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            presenceData: []
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
            this.setState({
                presenceData: data
            })
          
        })
    }






render() {
    return (
        <table className="styled-table">
          <thead>
              <tr>
                  <th>Anwesend</th>
                  <th>Kranmeldung eingereicht</th>
                  <th>Datum</th>
              </tr>
          </thead>
          <tbody>
                  {this.state.presenceData.map((element,index) => {
                    return(
                        <tr key={index}>
                            <td>{element.presence ? "Ja" : "Nein"}</td>
                            <td>{element.confirmation? "Ja" : "Nein"}</td>
                            <td>{element.date}</td>
                        </tr>
                    )
                  })}
              </tbody>
        </table>
    );
  
}
}
