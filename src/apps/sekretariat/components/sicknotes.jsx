import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/sekretariat.css';
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
            sicknotes: [],
        }

        this.toggleShowStudents = this.toggleShowStudents.bind(this);
        this.toggleShowTeachers = this.toggleShowTeachers.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.renderSicknotes = this.renderSicknotes.bind(this);
        this.getSicknotes = this.getSicknotes.bind(this);
        this.isSubstringOf = this.isSubstringOf.bind(this);
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

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    componentDidMount() {
        this.getSicknotes();
    }


    async getSicknotes() {
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL : PATHS.REACT_APP_PATH_PROD + '/sekretariat/krankmeldungen', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+JSON.parse(localStorage.getItem("loggedIn")).token,
            },
        }).then(response => response.json())
          .then(data =>{
              console.log(data)
            this.setState({
                sicknotes: data
            })
        })
    }


    isSubstringOf(firstname, lastname) {

        var completeName = firstname+lastname;
        if(this.state.searchText == '') {
            return true;
        }

        if (this.state.searchText !== null && this.state.searchText !== ''){
            if (firstname.toLowerCase().includes(this.state.searchText.toLowerCase()) || lastname.toLowerCase().includes(this.state.searchText.toLowerCase()) || completeName.toLowerCase().includes(this.state.searchText.toLowerCase().replace(/\s/g, ''))) {
                return true;
            }    
        }

        return false;
    }



    renderSicknotes() {
                return (
                    <div className="sicknotes-grid">
                        {this.state.sicknotes ? (
                            this.state.sicknotes.map((user) => {
                                return <SickNote 
                                            key={user.lastName} 
                                            firstname={user.firstName} 
                                            lastname ={user.lastName} 
                                            rolle={user.rolle}  
                                            display = {this.isSubstringOf(user.firstName,user.lastName) ? true : false }  
                                            showTeachers={this.state.showTeachers} 
                                            showStudents={this.state.showStudents} 
                                            affectedUserId = {user.affectedUserId}
                                            sicknoteId = {user.sicknessNoteId}
                                            confirmation = {user.confirmation}
                                        />
                            }))
                        : void(0)};  
                    </div>
            )         
    }



    render() {
        return (
            <div className="sekretariat-home">
         

                <LeftNavigation selected="Krankmeldungen" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                    <div className="search-sicknote-container">
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <div>
                                    <Icon  className='search-icon'   size={'100%'} icon={ic_search}/>
                                    <input className="search-sicknote" placeholder="Krankmeldung suchen..." onChange={(e) => this.handleSearch(e)}></input>
                                </div>
                                <div className="switch-buttons">
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

                            </div>
                            <div >
                                {this.renderSicknotes()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}