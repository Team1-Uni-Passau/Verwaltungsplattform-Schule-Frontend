import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
import TopBar from '../../../assets/components/topBar';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SickNote from '../../../assets/components/sicknote';

export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            showStudents: true,
            showTeachers: true
        }

        this.toggleShowStudents = this.toggleShowStudents.bind(this);
        this.toggleShowTeachers = this.toggleShowTeachers.bind(this);
    }



    toggleShowStudents() {
        let currentShowStudentsValue = this.state.showStudents
        this.setState({
            showStudents: !currentShowStudentsValue
        })
    }

    toggleShowTeachers() {
        let currentShowTeachersValue = this.state.showTeachers;
        this.setState({
            showTeachers: !currentShowTeachersValue
        })
    }


    render() {
        return (
            <div className="sekretariat-home">
                <LeftNavigation selected="Krankmeldungen" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                    <div className="search-sicknote-container">
                            <div>
                                <input className="search-sicknote" placeholder="Krankmeldung suchen..."></input>
                                <FormControl>
                                    <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                <Switch                                        
                                                    value="checkedB"
                                                    checked={this.state.showStudents}
                                                    onChange={this.toggleShowStudents}
                                                    color='primary'
                                                />
                                                }
                                                    labelPlacement="start"
                                                    label="Lernende"
                                                
                                            />
                                            <FormControlLabel 
                                                control={
                                                <Switch 
                                                    value="checkedC" 
                                                    checked={this.state.showTeachers}
                                                    onChange={this.toggleShowTeachers}
                                                    color='primary'
                                                />} 
                                                    label="Lehrende" 
                                                    labelPlacement="start" 
                                                
                                            />
                                    </FormGroup>
                                    </FormControl>

                            </div>
                            <div className="sicknotes-grid">
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>
                                <SickNote/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}