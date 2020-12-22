import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/parents.css'

export default class schema extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }




    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="Schema" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                    </div>
                </div>
            </div>
        )
    }



}