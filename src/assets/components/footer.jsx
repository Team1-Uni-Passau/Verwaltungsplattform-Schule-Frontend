import React from 'react';
import DATA from '../../apps/main/static data/Data.json';
import '../stylesheets/footer.css'


export default class footer extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <React.Fragment>   
                <div className="footer">
                    <div className="about-school">
                        <h4>Über diese Schule</h4>
                        <p>{DATA.ABOUT_SCHOOl}</p>
                    </div>
                    <div className="follow-us">
                        <h4>Begleiten Sie uns</h4>
                        <div>
                            <p>8, Große Klingergxxxx</p>
                            <p>12345 Passau - Deutschland</p>
                            <p>Tél. : 015225841xxxx</p>
                        </div>
                        <p>Email : email-address@gmail.com</p>
                        </div>
                    <div className="open-location" style={{marginTop:'-15px'}}>
                        <h4>Standort öffnen</h4>
                        <p></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }



}









