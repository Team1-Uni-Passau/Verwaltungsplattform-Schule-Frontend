import React from 'react';
import '../stylesheets/grades-table.css';
import * as PATHS from '../../apps/GlobalConstants';


export default class ExamsTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            exams: []
        }
        this.fetchExams = this.fetchExams.bind(this);

    }

    componentDidMount() {
        this.fetchExams();
    }

    async fetchExams() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/lehrender/pruefungen/'+JSON.parse(localStorage.getItem("loggedIn")).userId : PATHS.REACT_APP_PATH_PROD + '/lehrender/pruefungen/'+JSON.parse(localStorage.getItem("loggedIn")).userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
            this.setState({
                exams: data
            })
        })
    }




    render () {
        return (
            <table className="styled-table">
              <thead>
                  <tr>
                      <th>Fach</th>
                      <th>Tag</th>
                      <th>Datum</th>
                      <th>Typ</th>
                      <th>Stunde</th>
                      <th>Klasse</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.exams.map((element,index) => {
                    return(
                        <tr key={index}>
                            <td>{element.subject}</td>
                            <td>{element.day}</td>
                            <td>{element.date}</td>
                            <td>{element.type}</td>
                            <td>{element.hour}</td>
                            <td>{element.classId}</td>
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