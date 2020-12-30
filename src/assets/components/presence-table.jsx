import React from 'react';
import '../stylesheets/grades-table.css';

export default function PresenceTable() {

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
            <tr>
                <td>Ja</td>
                <td>Nein</td>
                <td>10.10.2020</td>
            </tr>
            <tr>
                <td>Ja</td>
                <td>Nein</td>
                <td>10.10.2020</td>
            </tr>
            <tr>
                <td>Ja</td>
                <td>Nein</td>
                <td>10.10.2020</td>
            </tr>
            <tr>
                <td>Ja</td>
                <td>Nein</td>
                <td>10.10.2020</td>
            </tr>
            <tr>
                <td>Ja</td>
                <td>Nein</td>
                <td>10.10.2020</td>
            </tr>

        </tbody>
      </table>
  );
}
