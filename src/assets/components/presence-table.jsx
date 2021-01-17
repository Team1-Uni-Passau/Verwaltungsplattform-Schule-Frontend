import React from 'react';
import '../stylesheets/grades-table.css';
import * as PATHS from '../../apps/GlobalConstants';
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
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL : PATHS.REACT_APP_PATH_PROD + '/eltern/praesenz/'+JSON.parse(localStorage.getItem("loggedIn")).userId, {
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
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
                  {this.state.presenceData.map((element,index) => {
                    return(
                        <tr key={index}>
                            <td>{element.presence ? "Ja" : "Nein"}</td>
                            <td>{element.confirmation? "Ja" : "Nein"}</td>
                            <td>{element.date}</td>
                            <td style={{backgroundColor:element.colour}}></td>
                            
                        </tr>
                    )
                  })}
              </tbody>
        </table>
    );
  
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
