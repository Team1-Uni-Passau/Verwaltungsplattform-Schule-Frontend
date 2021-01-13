import React from 'react';
import '../stylesheets/topbar.css';
import {user} from 'react-icons-kit/icomoon/user'
import Icon from 'react-icons-kit';

export default class TopBar extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {

        }

        this.logout = this.logout.bind(this);
    }


    logout() {
        localStorage.setItem("loggedIn", null);
        window.location.href = "/login";
    }

    render() {
        return (
            <div className="topbar-container">
                <div className='user-options'>
                            <div className="dropdown">
                            <Icon  className="dropbtn" size={'100%'} icon={user}/>
                            <div className="dropdown-content">
                                <a className="dropdown-choice" onClick={this.logout}>Logout</a>
                            </div>
                            </div>

                </div>

            </div>
        )
    }



}