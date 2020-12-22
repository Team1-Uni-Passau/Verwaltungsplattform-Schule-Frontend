import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/parents.css';
import TopBar from '../../../assets/components/topBar';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SickNote from '../../../assets/components/sicknote';
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';



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

                    </div>
                </div>
            </div>
        )
    }



}