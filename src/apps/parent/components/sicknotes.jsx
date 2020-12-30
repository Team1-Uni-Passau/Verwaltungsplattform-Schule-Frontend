import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/parents.css';
import TopBar from '../../../assets/components/topBar';
import SicknoteForm from '../../../assets/components/sicknoteForm';


export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            showStudents: true,
            showTeachers: true,
            searchText: '',
        }
    }



    render() {
        return (
            <div className="parents-home">
         

                <LeftNavigation selected="Krankmeldung erfassen" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                        <SicknoteForm/>
                    </div>
                </div>
            </div>
        )
    }



}