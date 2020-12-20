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
<<<<<<< Updated upstream
=======
import { ToastContainer, toast } from 'react-toastify';
import '../stylesheets/ReactToastify.css';
import { ActionAssignmentTurnedIn } from 'material-ui/svg-icons';
>>>>>>> Stashed changes

export default class Homepage extends React.Component {

    
    
    
    constructor (props){
        super(props);
        this.state = {
            type: "password",
            displayModal: false,
            showAnswers: [],
<<<<<<< Updated upstream
            displaySideNavigation: false
=======
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
<<<<<<< Updated upstream
            logginFailed: false
>>>>>>> Stashed changes
=======
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
>>>>>>> Stashed changes
        }

        


        this.changeType = this.changeType.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
<<<<<<< Updated upstream
        this.displayAnswer = this.displayAnswer.bind(this);
        this.redirectAboutUs = this.redirectAboutUs.bind(this);
        this.openSideNavigation = this.openSideNavigation.bind(this);
        this.closeSideNavigation = this.closeSideNavigation.bind(this);
        this.displayModal2 = this.displayModal.bind(this);
        
=======
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.restorePassword = this.restorePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);     
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);     
        this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.handleRegisterRepeatPasswordChange = this.handleRegisterRepeatPasswordChange.bind(this);
<<<<<<< Updated upstream
        this.handleRegisterFirstnameChange = this.handleRegisterFirstNameChange.bind(this);
        this.handleRegisterNameChange = this.handleRegisterNameChange.bind(this);    
        this.handleRegister_RegisterCodeChange  = this.handleRegister_RegisterCodeChange.bind(this);
        this.notifyOnRegistrationSuccess  = this.notifyOnRegistrationSuccess.bind(this);
        this.redirectUserToRespectiveView = this.redirectUserToRespectiveView.bind(this);
        //this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
>>>>>>> Stashed changes
=======
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
        
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    openSideNavigation() {
        this.setState({
            displaySideNavigation: true
        })
    }

    closeSideNavigation() {
        this.setState({
            displaySideNavigation: false
        })
=======

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream

=======
    //Method to get the value of the text entered by the user in the username field in the register modal
    //handleRegisterUsernameChange(e) {
    //   this.registerName = e.target.value;
   // }

    //Method to get the value of the text entered by the user in the "Vornamen" field in the register modal
>>>>>>> Stashed changes
    handleRegisterFirstNameChange(e) {
        this.registerFirstName = e.target.value;
    }

<<<<<<< Updated upstream

=======
    //Method to get the value of the text entered by the user in the "Nachnamen" field in the register modal
>>>>>>> Stashed changes
    handleRegisterNameChange(e) {
        this.registerName = e.target.value;
    }

<<<<<<< Updated upstream
=======
   //Method to get the value of the text entered by the user in the "Email" field in the register modal
   handleRegisterEmailChange(e) {
    this.registerEmail = e.target.value;
   }
    //Method to get the value of the text entered by the user in the "Passwort" field in the register modal
   handleRegisterPasswordChange(e) {
    this.registerPassword = e.target.value;
    }
     //Method to get the value of the text entered by the user in the "Passwort wiederholen" field in the register modal
     handleRegisterRepeatPasswordChange(e) {
       this.registerRepeatPassword = e.target.value;
    }

    //Method to get the value of the text entered by the user in the "Registrierungscode" field in the register modal
    handleRegisterRegisterCodeChange(e) {
        this.registerRegisterCode = e.target.value;
     }


    //Method to get the value of the text entered by the user in the radio box  in the register modal
>>>>>>> Stashed changes
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

>>>>>>> Stashed changes
    }
    


    redirectAboutUs() {
        window.location.href = "/aboutus";
    }

<<<<<<< Updated upstream
    displayAnswer(index){
        let answersAlreadyDisplayed = this.state.showAnswers;
=======
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

                                 
            //soll Email auf Strukturelle Richtigkeit überprüfen.
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.registerEmail)){
                this.setState({
                    EmailStructureInvalid: false
                })
            }else{
                this.setState({
                    EmailStructureInvalid : true
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
             if(!this.registerRegisterCode){
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

            if(this.registerEmail)
        

            if (this.registerFirstName && this.registerName && this.registerEmail && this.registerPassword && this.registerRepeatPassword && this.registerCode  && this.state.roleCheckedInRegisterForm.length !== 0) {       
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
                            errorMessage: "Der Registrierungscode ist nicht valid, versuchen Sie es nochmal."
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
>>>>>>> Stashed changes

        if(!answersAlreadyDisplayed.includes(index)){          //checking weather array contain the id
            answersAlreadyDisplayed.push(index);               //adding to array because value doesnt exists
        }else{
            answersAlreadyDisplayed.splice(answersAlreadyDisplayed.indexOf(index), 1);  //deleting
        }
<<<<<<< Updated upstream
                this.setState({
            showAnswers: answersAlreadyDisplayed
        })
=======
    
    


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
        function PWprüfen () {
                    
            var PW1 = this.handleRegisterPasswordChange;
            var PW2 = this.handleRegisterRepeatPasswordChange;
            var fehler = ""
    
            if (PW1 = PW2){
                fehler += "- Passwort nicht identisch\n";
            }
            if(PW1.length <= 8){
                fehler +="- Passwort zu kurz\n";
            } 
            if(fehler != ""){
                var fehlertext = "Die folgenden Felder wurden nicht vollständig ausgefüllt: \n \n";
                fehlertext += fehler;
                alert(fehlertext)
                return false;
            }
                return true;
            
        
        
        }
>>>>>>> Stashed changes
    }

    
  


    render() {
        
        return (
            <div className="wrapper">
                
                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon  className='close-modal'  onClick={this.undisplayModal} size={'100%'} icon={cross}/>
                    <div className="modal-content">
                        <h1 className="register-title">Konto erstellen</h1>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                        <input className="username" type="text" placeholder="Benutzername"></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben"></input>
                        <input className="username" type="password" placeholder="Passwort"></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen"></input>
                        <input className="username" type="text" placeholder="Registrierungscode"></input>
=======
                        <div className="email-already-in-use" style={this.state.userIsAlreadySaved? void(0):{display:'none'}}><p>Diese E-Mail addresse wird bereits verwendet</p></div>
                        <div className="unknown-error" style={this.state.registrationUnknownError? void(0):{display:'none'}}><p>Etwas ist schiefgelaufen</p></div>
                     
                        <input className="username" type="text" placeholder="Vorname" onChange={(e) => this.handleRegisterFirstNameChange(e)} style={this.FirstNameInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-username" style={this.state.FirstNameInvalid ? void(0) : {display:'none'}}>Vorname is ein Pflichtfeld.</p>
                        
                        <input className="username" type="text" placeholder="Nachname" onChange={(e) => this.handleRegisterNameChange(e)} style={this.NameInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-username" style={this.state.NameInvalid ? void(0) : {display:'none'}}>Nachname is ein Pflichtfeld.</p>

                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben" onChange={(e) => this.handleRegisterEMailChange(e)} style={this.EmailInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-username" style={this.state.EmailInvalid ? void(0) : {display:'none'}}>Email is ein Pflichtfeld.</p>

                        <input className="username" type="text" placeholder="Passwort eingeben" onChange={(e) => this.handleRegisterPasswordChange(e)} style={this.RegisterPasswortInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-username" style={this.state.RegisterPasswortInvalid ? void(0) : {display:'none'}}>Passwort is ein Pflichtfeld.</p>
                        
                        <input className="username" type="text" placeholder="Passwort wiederholen" onChange={(e) => this.handleRegisterRepeatPasswordChange(e)} style={this.RegisterRepeatPasswordInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-username" style={this.state.RegisterRepeatPasswordInvalid ? void(0) : {display:'none'}}>Passwort wiederholen is ein Pflichtfeld.</p>

                        <input className="username" type="text" placeholder="Registrierungscode" onChange={(e) => this.handleRegister_RegisterCodeChange(e)} style={this.RegisterCodeInvalid ? {borderColor:'red' ,boxShadow:'none'} : void(0) }></input>
                        <p className="form-validation-username" style={this.state.RegisterCodeInvalid ? void(0) : {display:'none'}}>Registrierungscode is ein Pflichtfeld.</p>
                        
                        {/*<input className="username" type="text" placeholder="Nachname" onChange={this.handleRegisterNameChange}></input> 
                        
                        <input className="username" type="text" placeholder="Vorname" ></input>
                        <input className="username" type="text" placeholder="Nachname" ></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben" onChange={this.handleRegisterEmailChange}></input>
                        <input className="username" type="password" placeholder="Passwort" onChange={this.handleRegisterPasswordChange}></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen" onChange={this.handleRegisterRepeatPasswordChange}></input>
                        <input className="username" type="text" placeholder="Registrierungscode" onChange={this.handleRegister_RegisterCodeChange}></input> */}
>>>>>>> Stashed changes
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                                            <input type="text" className="username" placeholder="Benutzername"></input>
                                            <div className="password-container">
                                                <input type={this.state.type} className="password" placeholder="Passwort"></input>
                                                <Icon  className="password-icon" onClick={this.changeType} size={'100%'} icon={this.state.type == "password" ? eye : eyeBlocked}/>
=======
                                        <p className="login-failed" style={this.state.logginFailed && !this.state.passwordInvalid && !this.state.usernameInvalid ? void(0) : {display:'none'}}>Falsche Anmeldedaten, Versuchen Sie es erneut.</p>

                                            <div className="username-input-container" style={this.state.usernameInvalid ? {height:'70px'} : void(0)}>
                                                <input type="text" className="username" placeholder="Benutzername" onChange={(e) => this.handleUsernameChange(e)} style={this.state.usernameInvalid ? {borderColor:'red',boxShadow:'none'} : void(0)}></input>
                                                <p className="form-validation-username" style={this.state.usernameInvalid ? void(0) : {display:'none'}}>Benutzername is ein Pflichtfeld.</p>
                                            </div>
                                            <div className="password-container-homepage">
                                                <input type={this.state.type} className="password"  onChange={(e) => this.handlePasswordChange(e)} placeholder="Passwort" style={this.state.passwordInvalid ? {borderColor:'red',boxShadow:'none'} : void(0)}></input>
                                                <p className="form-validation-password" style={this.state.passwordInvalid ? void(0) : {display:'none'}}>Passwort is ein Pflichtfeld.</p>
                                                {/* <Icon  className="password-icon" onClick={this.changeType} size={'100%'} icon={this.state.type == "password" ? eye : eyeBlocked}/> */}
                                            </div>
                                            <div style={{textAlign:'center'}}>
                                                <button className="login-button" onClick={this.handleLogin}>Einloggen</button>
                                                <p className="forgot-password" onClick={this.restorePassword}>Password vergessen?</p>
>>>>>>> Stashed changes
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