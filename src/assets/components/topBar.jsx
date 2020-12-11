import React from 'react';
import '../stylesheets/topbar.css';
import {user} from 'react-icons-kit/icomoon/user'
import Icon from 'react-icons-kit';

export default class TopBar extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <div className="topbar-container">
                <div className='user-options'>
                            <Icon  className="user-options-icon" size={'100%'} icon={user}/>
                </div>

            </div>
        )
    }



}