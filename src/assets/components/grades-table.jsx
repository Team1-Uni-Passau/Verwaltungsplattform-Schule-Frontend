import React from 'react';
import '../stylesheets/grades-table.css';

export default class GradesTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            grades: []
        }

        this.getGradesForStudent = this.getGradesForStudent.bind(this);

    }

    componentDidMount() {
        this.getGradesForStudent();
    }

    async getGradesForStudent() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL : PATHS.REACT_APP_PATH_PROD + '/eltern/noten/'+JSON.parse(localStorage.getItem("loggedIn")).userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
            this.setState({
                grades: data
            })
            
        })
    }




    render () {
        return (
            <table className="styled-table">
              <thead>
                  <tr>
                      <th>Fach</th>
                      <th>Note</th>
                      <th>Prüfungstyp</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.grades.map((element,index) => {
                    return(
                        <tr key={index}>
                            <td>{element.subject}</td>
                            <td>{element.grade}</td>
                            <td>{element.type}</td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
        );
      
    }
}
