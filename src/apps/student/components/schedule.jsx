import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import '../stylesheets/student.css'

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }




    render() {
        return (
            <div className="student-home">
                <LeftNavigation selected="Wochenplan" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                    </div>
                </div>
            </div>
        )
    }



}