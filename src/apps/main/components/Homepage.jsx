import React from 'react';
import '../stylesheets/Homepage.css';
import HomepagePicture from '../../../assets/images/Homepage.jpg';
import {eye} from 'react-icons-kit/icomoon/eye'
import {eyeBlocked} from 'react-icons-kit/icomoon/eyeBlocked'
import Icon from 'react-icons-kit';
import Modal from '../../../assets/components/modal'
import {cross} from 'react-icons-kit/icomoon/cross'
import {ic_menu} from 'react-icons-kit/md/ic_menu'
import { ToastContainer, toast } from 'react-toastify';
import '../stylesheets/ReactToastify.css';

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
            roleCheckedInRegisterForm: '',
            userIsAlreadySaved: false,
            registrationUnknownError: false,
            logginFailed: false
        }


        this.changeType = this.changeType.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.restorePassword = this.restorePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);     
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);     
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatPasswordChange = this.handleRegisterRepeatPasswordChange.bind(this);
        this.handleRegisterUsernameChange = this.handleRegisterUsernameChange.bind(this);     
        this.handleRegister_RegisterCodeChange  = this.handleRegister_RegisterCodeChange.bind(this);
        this.notifyOnRegistrationSuccess  = this.notifyOnRegistrationSuccess.bind(this);
        this.redirectUserToRespectiveView = this.redirectUserToRespectiveView.bind(this);
    }


    // Method to toggle the password visibility (Text or bullets)
    changeType(){
        let type = this.state.type == "password" ? "text" : "password";
        this.setState({
            type: type
        })
    }


    // Method called to display the registration Modal
    displayModal(){
        this.setState({
            displayModal: true
        })
    }

    // Method to undisplay the registration Modal
    undisplayModal(){
        this.setState({
            displayModal: false
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


    handleRegisterUsernameChange(e) {
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


    notifyOnRegistrationSuccess() {
        toast.success("Registrierung erfolgreich abgeschlossen, Sie können sich jetzt anmelden.")
    }

    redirectUserToRespectiveView(role){
        const roles = {
            LEHRENDE: 'Lehrender',
            LERNENDE: 'Lernender',
            ADMIN: 'Administrator',
            ELTERN: 'Eltern',
            SEKRETARIAT: 'Sekretariat'
        }
        console.log(role)
            switch(role){
                case roles.LEHRENDE:
                    window.location.href = "/startseite/teacher";
                    break;
                case roles.ADMIN:
                    window.location.href = "/startseite/admin";
                    break;
                case roles.ELTERN:
                    window.location.href = "/startseite/parent";
                    break;
                case roles.LERNENDE:
                    window.location.href = "/startseite/student";
                    break;
                case roles.SEKRETARIAT:
                    window.location.href = "/sekretariat/events";
                    break;
                default:
                    void(0);           
            }
        
            }



        // Method to send the register data (username, password, repeat password, email, register code, role ) to the backend as a HTTP request
        async handleRegister() {
            if (this.registerName && this.registerEmail && this.registerPassword && this.registerRepeatPassword && this.registerCode  && this.state.roleCheckedInRegisterForm.length !== 0) {       
                await fetch('http://localhost:10000/registration', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        registerName: this.registerName,
                        registerEmail: this.registerEmail,
                        registerPassword: this.registerPassword,
                        registerCode: this.registerCode,
                        roleCheckedInRegisterForm: this.state.roleCheckedInRegisterForm,
                    })
                }).then(response => {
                    if(response.status === 200){
                        this.setState({
                            userIsAlreadySaved: false,
                            registrationUnknownError: false
                        })          
                        this.undisplayModal();
                        this.notifyOnRegistrationSuccess();  
                    } else if (response.status === 409){
                        console.log(response.text())
                        this.setState({
                            userIsAlreadySaved: true,
                            registrationUnknownError: false
                        })
                    } else {
                        this.setState({
                            registrationUnknownError: true,
                            userIsAlreadySaved: false,
                        })
                    }
                });                    
            } 

        }
    
    


    // Method to send the login data (username and the password) to the backend as a HTTP request
    async handleLogin() {
        if(!this.username){
            this.setState({
                usernameInvalid: true
            })
        } else {
            this.setState({
                usernameInvalid: false
            })
        }
        if(!this.password){
            this.setState({
                passwordInvalid: true
            })
        } else {
            this.setState({
                passwordInvalid: false
            })
        }
        if (this.username && this.password) {
           await fetch('http://localhost:10000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            }).then(response => response.json())
              .then(data =>{
                  console.log(data)
                if(data.role  && data.token){
                    localStorage.setItem("loggedIn", {
                        username: this.username,
                        role: data.role,
                        token: data.token,
                        loggedIn: true
                    });    
                } else {
                    this.setState({
                        logginFailed: true
                    })
                }

                this.redirectUserToRespectiveView(data.role);
            })
        } 
    }



    render() {
        return (
            <div className="wrapper">
                <ToastContainer 
                    position="top-center"
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />

                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="register-title">Konto erstellen</h1>
                        <div className="email-already-in-use" style={this.state.userIsAlreadySaved? void(0):{display:'none'}}><p>Diese E-Mail addresse wird bereits verwendet</p></div>
                        <div className="unknown-error" style={this.state.registrationUnknownError? void(0):{display:'none'}}><p>Etwas ist schiefgelaufen</p></div>
                        <input className="username" type="text" placeholder="Benutzername" onChange={this.handleRegisterUsernameChange}></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben" onChange={this.handleRegisterEmailChange}></input>
                        <input className="username" type="password" placeholder="Passwort" onChange={this.handleRegisterPasswordChange}></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen" onChange={this.handleRegisterRepeatPasswordChange}></input>
                        <input className="username" type="text" placeholder="Registrierungscode" onChange={this.handleRegister_RegisterCodeChange}></input>
                        <div className="user-type"><b style={{fontSize:"15px"}}>Ich bin ein: </b> 
                            <div className="parent-or-child">
                                <div className="parent"><input type="checkbox" id="parent" checked={this.state.roleCheckedInRegisterForm === "Eltern"} onChange={() => this.handleCheckboxChange("Eltern")}></input><label htmlFor="parent">Elternteil</label></div>
                                <div className="child"><input type="checkbox" id="child" checked={this.state.roleCheckedInRegisterForm === "Lernender"} onChange={() => this.handleCheckboxChange("Lernender")}></input><label htmlFor="child">Schüler</label></div>
                            </div>
                        </div>
                        <button className="confirm-registration" onClick={this.handleRegister}>Registrieren</button>
                    </div>
                </Modal>
                <header className="top-navigation">
                        <div className="dropdown">
                            <Icon className="dropbtn" size={'100%'} icon={ic_menu}/>
                            <div className="dropdown-content">
                                <a onClick={this.displayModal}>Registrieren</a>
                            </div>
                        </div>

                        <div className="title"><b>V</b>erwaltungsplattform Schule</div>
                        <div className="buttons-top-right">
                            <button className="register-button" onClick={this.displayModal}>Registrieren</button>
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
                                        <p className="login-failed" style={this.state.logginFailed && !this.state.passwordInvalid && !this.state.usernameInvalid ? void(0) : {display:'none'}}>Falsche Anmeldedaten, Versuchen Sie es erneut.</p>

                                            <div className="username-input-container" style={this.state.usernameInvalid ? {height:'70px'} : void(0)}>
                                                <input type="text" className="username" placeholder="Benutzername" onChange={(e) => this.handleUsernameChange(e)} style={this.state.usernameInvalid ? {borderColor:'red',boxShadow:'none'} : void(0)}></input>
                                                <p className="form-validation-username" style={this.state.usernameInvalid ? void(0) : {display:'none'}}>Benutzername is ein Pflichtfeld.</p>
                                            </div>
                                            <div className="password-container-homepage">
                                                <input type={this.state.type} className="password" onChange={(e) => this.handlePasswordChange(e)} placeholder="Passwort" style={this.state.passwordInvalid ? {borderColor:'red',boxShadow:'none'} : void(0)}></input>
                                                <p className="form-validation-password" style={this.state.passwordInvalid ? void(0) : {display:'none'}}>Passwort is ein Pflichtfeld.</p>
                                                {/* <Icon  className="password-icon" onClick={this.changeType} size={'100%'} icon={this.state.type == "password" ? eye : eyeBlocked}/> */}
                                            </div>
                                            <div style={{textAlign:'center'}}>
                                                <button className="login-button" onClick={this.handleLogin}>Einloggen</button>
                                                <p className="forgot-password" onClick={this.restorePassword}>Password vergessen?</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                </div>

                
                
            </div>
        )
    }



}