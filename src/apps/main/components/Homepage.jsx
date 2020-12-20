import React from 'react';
import '../stylesheets/Homepage.css';
import HomepagePicture from '../../../assets/images/Homepage.jpg';
import DATA from '../static data/Data.json';
import {eye} from 'react-icons-kit/icomoon/eye'
import {eyeBlocked} from 'react-icons-kit/icomoon/eyeBlocked'
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'
import TeamPhoto from '../../../assets/images/TeamPhoto.jpg';
import QUESTIONS from '../static data/Questions.json';
import Footer from '../../../assets/components/footer';
import {ic_menu} from 'react-icons-kit/md/ic_menu'
import { ToastContainer, toast } from 'react-toastify';
import '../stylesheets/ReactToastify.css';
import { ActionAssignmentTurnedIn } from 'material-ui/svg-icons';

export default class Homepage extends React.Component {

    
    
    
    constructor (props){
        super(props);
        this.state = {
            type: "password",
            displayModal: false,
            showAnswers: [],

            displaySideNavigation: false,

            usernameInvalid: false,
            passwordInvalid: false,

            FirstNameInvalid: false,
            NameInvalid: false,
            EmailInvalid: false,
            RegisterPasswortInvalid: false,
            RegisterRepeatPasswordInvalid: false,              
                        

            roleCheckedInRegisterForm: '',
            userIsAlreadySaved: false,
            registrationUnknownError: false,

            logginFailed: false,


            logginFailed: false,
            errorMessage: '',

            RegisterFirstNameInvalid: false,
            RegisterNameInvalid: false,
            RegisterEmailInvalid: false,
            RegisterPasswordInvalid: false,
            RegisterRepeatPasswordInvalid: false,
            RegisterRegisterRegisterCodeInvalid: false,
            PasswordRepeatInvalid: false,
            EmailStructureInvalid: false,
            PasswordLengthInvalid : false,
            PasswordStructureInvalid: false,

        }

        


        this.changeType = this.changeType.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);

        this.displayAnswer = this.displayAnswer.bind(this);
        this.redirectAboutUs = this.redirectAboutUs.bind(this);
        this.openSideNavigation = this.openSideNavigation.bind(this);
        this.closeSideNavigation = this.closeSideNavigation.bind(this);
        this.displayModal2 = this.displayModal.bind(this);
        

        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.restorePassword = this.restorePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);     
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);     
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatPasswordChange = this.handleRegisterRepeatPasswordChange.bind(this);

        this.handleRegisterFirstnameChange = this.handleRegisterFirstNameChange.bind(this);
        this.handleRegisterNameChange = this.handleRegisterNameChange.bind(this);    
        this.handleRegister_RegisterCodeChange  = this.handleRegister_RegisterCodeChange.bind(this);
        this.notifyOnRegistrationSuccess  = this.notifyOnRegistrationSuccess.bind(this);
        this.redirectUserToRespectiveView = this.redirectUserToRespectiveView.bind(this);
        //this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

        //this.handleRegisterUsernameChange = this.handleRegisterUsernameChange.bind(this);     
        this.handleRegister_RegisterCodeChange  = this.handleRegister_RegisterCodeChange.bind(this);
        this.notifyOnRegistrationSuccess  = this.notifyOnRegistrationSuccess.bind(this);
        this.redirectUserToRespectiveView = this.redirectUserToRespectiveView.bind(this);

        this.handleRegisterFirstNameChange = this.handleRegisterFirstNameChange.bind(this);
        this.handleRegisterNameChange = this.handleRegisterNameChange.bind(this);
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleregisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatChange = this.handleRegisterRepeatPasswordChange.bind(this);
        this.handleRegisterRegisterCode = this.handleRegister_RegisterCodeChange.bind(this);
        

    }
    

    changeType(){
        let type = this.state.type == "password" ? "text" : "password";
        this.setState({
            type: type
        })
    }

    displayModal(){
        this.setState({
            displayModal: true
        })
    }

    undisplayModal(){
        this.setState({
            displayModal: false
        })
    }


    openSideNavigation() {
        this.setState({
            displaySideNavigation: true
        })
    }

    closeSideNavigation() {
        this.setState({
            displaySideNavigation: false
        })
    }
    // Method to get the value of the text intereted by the user in the password field in the login box
    handlePasswordChange(e) {
        this.password = e.target.value;
    }

    //Method to get the value of the text entered by the user in the username field in the login box
    handleUsernameChange(e) {
        this.username = e.target.value;
    }


    //Method to open the restore password page
    restorePassword() {
        window.location.href = "/forgotpassword";
    }



    handleRegisterEmailChange(e) {
        this.registerEmail = e.target.value;
    }


    handleRegisterRepeatPasswordChange(e) {
        this.registerPassword = e.target.value;
    }


    handleRegisterPasswordChange(e) {
        this.registerRepeatPassword = e.target.value;
    }


    handleRegister_RegisterCodeChange(e) {
        this.registerCode = e.target.value;
    }

    handleRegisterFirstNameChange(e) {
        this.registerFirstName = e.target.value;
    }

    handleRegisterNameChange(e) {
        this.registerName = e.target.value;
    }

    handleCheckboxChange = (TYPE) => {
        switch(TYPE){
            case "Eltern":
                this.setState({
                    roleCheckedInRegisterForm: "Eltern"
                })
            break;
            case "Lernender": {
                this.setState({
                    roleCheckedInRegisterForm: "Lernender"
                })
            break;
            }

            default: '';
        }


    }
    


    redirectAboutUs() {
        window.location.href = "/aboutus";
    }

    displayAnswer(index){
        let answersAlreadyDisplayed = this.state.showAnswers;

        if(!answersAlreadyDisplayed.includes(index)){          //checking weather array contain the id
            answersAlreadyDisplayed.push(index);               //adding to array because value doesnt exists
        }else{
            answersAlreadyDisplayed.splice(answersAlreadyDisplayed.indexOf(index), 1);  //deleting
        }
                this.setState({
            showAnswers: answersAlreadyDisplayed
        })
    }

    
  


    render() {
        
        return (
            <div className="wrapper">
                
                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="register-title">Konto erstellen</h1>

                        {/* <input className="username" type="text" placeholder="Benutzername"></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben"></input>
                        <input className="username" type="password" placeholder="Passwort"></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen"></input>
                        <input className="username" type="text" placeholder="Registrierungscode"></input> */}

                        <div className="email-already-in-use" style={this.state.userIsAlreadySaved? void(0):{display:'none'}}><p>{this.state.errorMessage}</p></div>
                        <div className="unknown-error" style={this.state.registrationUnknownError? void(0):{display:'none'}}><p>{this.state.errorMessage}</p></div>
                        <div className="wrong-register-code" style={this.state.WrongRegistrationCode? void(0):{display:'none'}}><p>{this.state.errorMessage}</p></div>

                        <input  className="register-input" type="text" placeholder="Vorname" onChange={(e) => this.handleRegisterFirstNameChange(e)} style={this.state.RegisterFirstNameInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterFirstNameInvalid ? void(0) : {display:'none'}}>Vorname ist ein Pflichtfeld.</p>

                        <input  className="register-input" type="text" placeholder="Nachname" onChange={(e) => this.handleRegisterNameChange(e)} style={this.state.RegisterNameInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterNameInvalid ? void(0) : {display:'none'}}>Nachname ist ein Pflichtfeld.</p>

                        <input  className="register-input" type="text" placeholder="E-Mail" onChange={(e) => this.handleRegisterEmailChange(e)} style={this.state.RegisterEmailInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterEmailInvalid ? void(0) : {display:'none'}}>E-Mail ist ein Pflichtfeld.</p>

                        <p className="form-validation-registration" style={this.state.EmailStructureInvalid &! this.state.RegisterEmailInvalid ? void(0) : {display:'none'}}>E-Mail überprüfen!</p>

                        <input  className="register-input" type="text" placeholder="Passwort" id="pw1" onChange={(e) => this.handleRegisterPasswordChange(e)} style={this.state.RegisterPasswordInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterPasswordInvalid ? void(0) : {display:'none'}}>Passwort ist ein Pflichtfeld.</p>

                        <p className="form-validation-registration" style={this.state.PasswordLengthInvalid &! this.state.RegisterPasswordInvalid ? void(0) : {display:'none'}}>Passwort muss mindestens 8 zeichen enthalten</p>
                        <p className="form-validation-registration" style={this.state.PasswordStructureInvalid &! this.state.RegisterPasswordInvalid ? void(0) : {display:'none'}}>Password muss mindestens eine Zahl und ein Sonderzeichen enthalten!</p>
                        
                        <input  className="register-input" type="text" placeholder="Passwort wiederholen" onChange={(e) => this.handleRegisterRepeatPasswordChange(e)} style={this.state.RegisterRepeatPasswordInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterRepeatPasswordInvalid ? void(0) : {display:'none'}}>Passwort wiederholen ist ein Pflichtfeld.</p>

                        <p className="form-validation-registration" style={this.state.PasswordRepeatInvalid &! this.state.RegisterRepeatPasswordInvalid ? void(0) : {display:'none'}}>Passwort ist nicht identisch!</p>
                        
                        <input  className="register-input" type="text" placeholder="Registrierungscode" onChange={(e) => this.handleRegisterRegisterCodeChange(e)} style={this.state.RegisterRegisterCodeInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterRegisterCodeInvalid ? void(0) : {display:'none'}}>Registrierungscode ist ein Pflichtfeld.</p>

                        {/*<input className="username" type="text" placeholder="Benutzername" onChange={this.handleRegisterUsernameChange}></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben" onChange={this.handleRegisterEmailChange}></input>
                        <input className="username" type="password" placeholder="Passwort" onChange={this.handleRegisterPasswordChange}></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen" onChange={this.handleRegisterRepeatPasswordChange}></input>
        <input className="username" type="text" placeholder="Registrierungscode" onChange={this.handleRegister_RegisterCodeChange}></input>*/}

                        <div className="user-type"><b style={{fontSize:"15px"}}>Ich bin ein: </b> 
                            <div className="parent-or-child">
                                <div className="parent"><input type="checkbox" id="parent"></input><label htmlFor="parent">Elternteil</label></div>
                                <div className="child"><input type="checkbox" id="child"></input><label htmlFor="child">Schüler</label></div>
                            </div>
                        </div>
                        <button className="confirm-registration">Registrieren</button>
                    </div>
                </Modal>

                <Modal show={this.state.displayModal2} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="title">Passwort vergessen</h1>
                        <button className="E-Mail-senden">E-Mail senden</button>
                    </div>
                </Modal>
        

            


                <header className="top-navigation">
                        <div className="dropdown">
                            <Icon className="dropbtn" size={'100%'} icon={ic_menu}/>
                            <div className="dropdown-content">
                                <a  onClick={this.displayModal}>Registrieren</a>
                                <a onClick={this.redirectAboutUs}>Über uns</a>
                            </div>
                        </div>

                        <div className="title"><b>V</b>erwaltungsplattform Schule</div>
                        <div className="buttons-top-right">
                            <button className="register-button" onClick={this.displayModal}>Registrieren</button>
                            {/*<button className="about-us" onClick={this.redirectAboutUs}>Über uns</button>*/}
                        </div>
                </header>

                
                <div className="middle-panel">
                            <div className="wrapper-picture-loginBox">
                                    <div className="homepage-picture">
                                        <img  src={HomepagePicture}/>
                                        <p className="picture-text">Neue Wege, um das Lernen zu verwalten</p>
                                        <p className="picture-sub-text">Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.</p>
                                    </div>
                                    <div className="login-box">
                                        <p className="login-text">Anmelden</p>
                                        <div className="login-data-container">
                                            <input type="text" className="username" placeholder="Benutzername"></input>
                                            <div className="password-container">
                                                <input type={this.state.type} className="password" placeholder="Passwort"></input>
                                                <Icon  className="password-icon" onClick={this.changeType} size={'100%'} icon={this.state.type == "password" ? eye : eyeBlocked}/>
                                            </div>
                                            <button className="login-button">Einloggen</button>
                                            <p className="forgot-password">Password vergessen?</p>
                                        </div>
                                    </div>
                            </div>
                           {/* <div className="school-infos">
                                <p className="header">{DATA.HEADER}</p>
                                <div className="questions">
                                    {QUESTIONS.LIST.map((item,index) => {
                                        return(
                                            <div key={index} className="question">
                                                <button className="show-more-button"  onClick={() => this.displayAnswer(index)}>{!this.state.showAnswers.includes(index) ? "+" : "-"}</button>
                                                <div>
                                                    <div className="question-content">{item}</div>
                                                    <p className="answer" style={this.state.showAnswers.includes(index) ? void(0) : {display:'none'}} >{DATA.ABOUT_SCHOOl}</p>
                                                </div>
                                            </div>    
                                        )
                                    })}
                                </div>
                            </div>
                            

                            <div className="team-informations">
                                <h1 className="members-title">Unser Führungsteam</h1>
                                <div>
                                    <img className="team-picture" src={TeamPhoto}/>
                                    <p className="team-name">Emily Mustermann</p>
                                </div>
                                <div className="vertical-line"/>
                                <div className="team-paragraph">{DATA.TEAM_PARAGRAPH}</div>
                                </div>*/}
                </div>

                {/*<Footer/>*/}
                
                
            </div>
        )
    }



}