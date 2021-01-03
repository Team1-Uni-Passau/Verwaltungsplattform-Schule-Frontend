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
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.restorePassword = this.restorePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);     
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);     
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatPasswordChange = this.handleRegisterRepeatPasswordChange.bind(this);
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


    //Method to get the value of the text entered by the user in the email field in the register modal
    handleRegisterFirstNameChange(e) {
        this.registerFirstName = e.target.value;
    }
    //Method to get the value of the text entered by the user in the email field in the register modal
    handleRegisterNameChange(e) {
        this.registerName = e.target.value;
    }

    //Method to get the value of the text entered by the user in the email field in the register modal
    handleRegisterEmailChange(e) {
        this.registerEmail = e.target.value;
    }

    //Method to get the value of the text entered by the user in the password field in the register modal
    handleRegisterPasswordChange(e) {
        this.registerPassword = e.target.value;
    }

    //Method to get the value of the text entered by the user in the repeat password field in the register modal
    handleRegisterRepeatPasswordChange(e) {
        this.registerRepeatPassword = e.target.value;
    }

    //Method to get the value of the text entered by the user in the register field in the register modal
    handleRegister_RegisterCodeChange(e) {
        this.registerCode = e.target.value;
    }

    


    //Method to get the value of the text entered by the user in the radio box  in the register modal
    handleCheckboxChange = (TYPE) => {
        switch(TYPE){
            case "Eltern":
                this.setState({
                    roleCheckedInRegisterForm: "Eltern"
                })
            break;
            case "Lernender": 
                this.setState({
                    roleCheckedInRegisterForm: "Lernender"
                })
            break;
            case "Sekretariat": 
                this.setState({
                    roleCheckedInRegisterForm: "Sekretariat"
                })
            break;
            case "Lehrer": 
                this.setState({
                    roleCheckedInRegisterForm: "Lehrer"
                })
            break;
            

            default: '';
        }

    }


    // Method to display a toast when the registration is successfull 
    notifyOnRegistrationSuccess() {
        toast.success("Registrierung erfolgreich abgeschlossen, Sie können sich jetzt anmelden.")
    }

    // Method to redirect the user to their respective view after they successfully log in
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
                    window.location.href = "/admin/events";
                    break;
                case roles.ELTERN:
                    window.location.href = "/parent/events";
                    break;
                case roles.LERNENDE:
                    window.location.href = "/student/events";
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

            //soll Email auf Strukturelle Richtigkeit überprüfen.
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registerEmail)){
                this.setState({
                    EmailStructureInvalid: false
                })
            }else{
                this.setState({
                    EmailStructureInvalid:true
                })
                
            }
            //Prüft ob das Passwort genug Zeichen Enthält
            var val = document.getElementById('pw1').value;
             if(val.length >= 8){
                 this.setState({
                     PasswordLengthInvalid: false
                 })
             }else{
                 this.setState({
                     PasswordLengthInvalid:true
                 })
             }

            if (val.match(/\d{1,}/) && val.match(/[a-zA-ZäöüÄÖÜ]{1,}/) && val.match(/\W/)){
                this.setState({
                    PasswordStructureInvalid: false
                })
            }else{
                this.setState({
                    PasswordStructureInvalid: true
                })
            }


            if(!this.registerFirstName){
                this.setState({
                     RegisterFirstNameInvalid: true
                })
            } else {
                this.setState({
                   RegisterFirstNameInvalid: false
                })
            }

            if(!this.registerName){
                this.setState({
                     RegisterNameInvalid: true
             })
            }else{
                 this.setState({
                     RegisterNameInvalid: false
             })
             }

             if(!this.registerEmail){
                this.setState({
                     RegisterEmailInvalid: true
             })
            }else{
                 this.setState({
                     RegisterEmailInvalid: false
             })
             }

             if(!this.registerPassword){
                this.setState({
                     RegisterPasswordInvalid: true
             })
            }else{
                 this.setState({
                     RegisterPasswordInvalid: false
             })
             }
             if(!this.registerRepeatPassword){
                this.setState({
                     RegisterRepeatPasswordInvalid: true
             })
            }else{
                 this.setState({
                     RegisterRepeatPasswordInvalid: false
             })
             }
             if(!this.registerCode){
                this.setState({
                     RegisterRegisterCodeInvalid: true
             })
            }else{
                 this.setState({
                     RegisterRegisterCodeInvalid: false
             })
             }
             if(this.registerPassword != this.registerRepeatPassword){
                 this.setState({
                     PasswordRepeatInvalid: true
                 })
             }else{this.setState({
                 PasswordRepeatInvalid: false
             })
             }

            if (this.registerName &&this.registerFirstName && this.registerEmail && this.registerPassword && this.registerRepeatPassword && this.registerCode  && this.state.roleCheckedInRegisterForm.length !== 0) {       
                await fetch('http://localhost:10000/registration', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        registerFirstName: this.registerFirstName,
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
                            registrationUnknownError: false,
                            WrongRegistrationCode: false,
                        })                                  
                        this.undisplayModal();
                        this.notifyOnRegistrationSuccess();  
                    } else if (response.status === 409){
                        this.setState({
                            userIsAlreadySaved: true,
                            registrationUnknownError: false,
                            WrongRegistrationCode: false,
                            errorMessage: "Diese E-Mail addresse wird bereits verwendet."
                        })
                    } else if (response.status === 422) {
                        this.setState({
                            WrongRegistrationCode: true,
                            userIsAlreadySaved: false,
                            registrationUnknownError: false,
                            errorMessage: "Das Registrierungscode ist nicht valid, versuchen Sie es nochmal."
                        })

                    }
                    else {
                        this.setState({
                            registrationUnknownError: true,
                            userIsAlreadySaved: false,
                            WrongRegistrationCode: false,
                            errorMessage: "Etwas ist schiefgelaufen."
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
                if(data.role  && data.token){
                    localStorage.setItem("loggedIn", JSON.stringify({
                        username: this.username,
                        role: data.role,
                        token: data.token,
                        loggedIn: true
                    }));  
                    this.username= '';
                    this.password='';
                } else {
                    console.log(data)
                    this.setState({
                        logginFailed: true,
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
                        <div className="email-already-in-use" style={this.state.userIsAlreadySaved? void(0):{display:'none'}}><p>{this.state.errorMessage}</p></div>
                        <div className="unknown-error" style={this.state.registrationUnknownError? void(0):{display:'none'}}><p>{this.state.errorMessage}</p></div>
                        <div className="wrong-register-code" style={this.state.WrongRegistrationCode? void(0):{display:'none'}}><p>{this.state.errorMessage}</p></div>

                        <input  className="register-input" type="text" placeholder="Vorname" onChange={(e) => this.handleRegisterFirstNameChange(e)} style={this.state.RegisterFirstNameInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterFirstNameInvalid ? void(0) : {display:'none'}}>Vorname ist ein Pflichtfeld.</p>

                        <input  className="register-input" type="text" placeholder="Nachname" onChange={(e) => this.handleRegisterNameChange(e)} style={this.state.RegisterNameInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterNameInvalid ? void(0) : {display:'none'}}>Nachname ist ein Pflichtfeld.</p>

                        <input  className="register-input" type="text" placeholder="E-Mail" onChange={(e) => this.handleRegisterEmailChange(e)} style={this.state.RegisterEmailInvalid || this.state.EmailStructureInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterEmailInvalid ? void(0) : {display:'none'}}>E-Mail ist ein Pflichtfeld.</p>

                        <p className="form-validation-registration" style={this.state.EmailStructureInvalid &! this.state.RegisterEmailInvalid ? void(0) : {display:'none'}}>E-Mail überprüfen!</p>

                        <input  className="register-input" type="text" placeholder="Passwort" id="pw1" onChange={(e) => this.handleRegisterPasswordChange(e)} style={this.state.RegisterPasswordInvalid || this.state.PasswordStructureInvalid || this.state.PasswordLengthInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterPasswordInvalid ? void(0) : {display:'none'}}>Passwort ist ein Pflichtfeld.</p>

                        <p className="form-validation-registration" style={this.state.PasswordLengthInvalid &! this.state.RegisterPasswordInvalid ? void(0) : {display:'none'}}>Passwort muss mindestens 8 zeichen enthalten</p>
                        <p className="form-validation-registration" style={this.state.PasswordStructureInvalid &! this.state.RegisterPasswordInvalid ? void(0) : {display:'none'}}>Password muss mindestens eine Zahl und ein Sonderzeichen enthalten!</p>

                        <input  className="register-input" type="text" placeholder="Passwort wiederholen" onChange={(e) => this.handleRegisterRepeatPasswordChange(e)} style={this.state.RegisterRepeatPasswordInvalid || this.state.PasswordRepeatInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterRepeatPasswordInvalid ? void(0) : {display:'none'}}>Passwort wiederholen ist ein Pflichtfeld.</p>

                        <p className="form-validation-registration" style={this.state.PasswordRepeatInvalid &! this.state.RegisterRepeatPasswordInvalid ? void(0) : {display:'none'}}>Passwort ist nicht identisch!</p>

                        <input  className="register-input" type="text" placeholder="Registrierungscode" onChange={(e) => this.handleRegister_RegisterCodeChange(e)} style={this.state.RegisterRegisterCodeInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-registration" style={this.state.RegisterRegisterCodeInvalid ? void(0) : {display:'none'}}>Registrierungscode ist ein Pflichtfeld.</p>

                        {/* <input className="username" type="text" placeholder="Benutzername" onChange={this.handleRegisterUsernameChange}></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben" onChange={this.handleRegisterEmailChange}></input>
                        <input className="username" type="password" placeholder="Passwort" onChange={this.handleRegisterPasswordChange}></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen" onChange={this.handleRegisterRepeatPasswordChange}></input>
                        <input className="username" type="text" placeholder="Registrierungscode" onChange={this.handleRegister_RegisterCodeChange}></input> */}
                        <div className="user-type"><b style={{fontSize:"15px"}}>Ich bin ein: </b> 
                            <div className="parent-or-child">
                                <div className="parent"><input type="checkbox" id="parent" checked={this.state.roleCheckedInRegisterForm === "Eltern"} onChange={() => this.handleCheckboxChange("Eltern")}></input><label htmlFor="parent">Elternteil</label></div>
                                <div className="child"><input type="checkbox" id="child" checked={this.state.roleCheckedInRegisterForm === "Lernender"} onChange={() => this.handleCheckboxChange("Lernender")}></input><label htmlFor="child">Schüler</label></div>
                                <div className="sekretariat"><input type="checkbox" id="sekretariat" checked={this.state.roleCheckedInRegisterForm === "Sekretariat"} onChange={() => this.handleCheckboxChange("Sekretariat")}></input><label htmlFor="sekretariat">Sekretaria</label></div>
                                <div className="teacher"><input type="checkbox" id="lehrer" checked={this.state.roleCheckedInRegisterForm === "Lehrer"} onChange={() => this.handleCheckboxChange("Lehrer")}></input><label htmlFor="lehrer">Lehrer</label></div>
                            </div>
                        </div>
                        <button className="confirm-registration" onClick={this.handleRegister}>Registrieren</button>
                    </div>
                </Modal>
                <header className="top-navigation">
                        {/* <div className="dropdown">
                            <Icon className="dropbtn" size={'100%'} icon={ic_menu}/>
                            <div className="dropdown-content">
                                <a onClick={this.displayModal}>Registrieren</a>
                            </div>
                        </div> */}

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