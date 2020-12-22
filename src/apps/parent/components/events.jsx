import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import EventCard from '../../../assets/components/eventCard'; 
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'
import '../stylesheets/parents.css'

export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
    //     console.log(JSON.parse(localStorage.getItem("loggedIn")))
    // }




    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Ankündigung" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                    </div>
                </div>
            </div>
        )
    }



}