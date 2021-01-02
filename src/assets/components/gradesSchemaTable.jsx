import React from 'react';
import '../stylesheets/grades-table.css';

export default class PresenceTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }


    distributeExams() {
        this.state.grades.map((item) => {
            item.type ==="Schriftlich" ? 
            <div className="writing-exam">{item.grade}</div>
            : 
            <div className="oral-exam">{item.grade}</div>
        })
    }


    render() {
        return (
            <table className="styled-table">
              <thead>
                  <tr>
                      <th>Fach</th>
                      <th>Schriftliche Noten</th>
                      <th>Mündliche Noten</th>
                      <th>Schriftliche Noten gesamt wert</th>
                      <th>Wertung schriftlich</th>
                      <th>Mündliche Noten gesamt wert</th>
                      <th>Wertung mündlich</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Mathe</td>
                      <td>3/2</td>
                      <td>2/1</td>
                      <td>3</td>
                      <td>0.6</td>
                      <td>4</td>
                      <td>0.4</td>
                  </tr>
                  <tr>
                      <td>Mathe</td>
                      <td>3/2</td>
                      <td>2/1</td>
                      <td>3</td>
                      <td>0.6</td>
                      <td>4</td>
                      <td>0.4</td>
                  </tr>
                  <tr>
                      <td>Mathe</td>
                      <td>3/2</td>
                      <td>2/1</td>
                      <td>3</td>
                      <td>0.6</td>
                      <td>4</td>
                      <td>0.4</td>
                  </tr>
                  <tr>
                      <td>Mathe</td>
                      <td>3/2</td>
                      <td>2/1</td>
                      <td>3</td>
                      <td>0.6</td>
                      <td>4</td>
                      <td>0.4</td>
                  </tr>
                  <tr>
                      <td>Mathe</td>
                      <td>3/2</td>
                      <td>2/1</td>
                      <td>3</td>
                      <td>0.6</td>
                      <td>4</td>
                      <td>0.4</td>
                  </tr>
              </tbody>
            </table>
        );
      
    }
}
