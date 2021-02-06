import Modal from '../../../assets/components/modal'
import React from 'react';
import '../stylesheets/restorePassword.css';
import { cross } from 'react-icons-kit/icomoon/cross'
import Icon from 'react-icons-kit';
import * as PATHS from '../../GlobalConstants';
import { ErrorOutlineOutlined } from '@material-ui/icons';
export default class restorePassword extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            validationKeyInvalid: false,
            PasswordInvalid: false,
            PasswordRepeatInvalid: false,
            PasswordEqualInvalid: false,
            EmailStructureValid: true,
            EmailInValid: false,
            PasswordStructureValid: true,
            
            
        }


        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.handleValidationInputChange = this.handleValidationInputChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
      
        this.handleSendMail = this.handleSendMail.bind(this);
        this.handleRestorePassword = this.handleRestorePassword.bind(this);
    }


    handleEmailInput(e) {
        this.email = e.target.value;

    }

    redirectToLogin() {
        window.location.href = "/";
    }

    // Method called to display the registration Modal
    displayModal() {
        this.setState({
            displayModal: true
        })
    }

    // Method to undisplay the registration Modal
    undisplayModal() {
        this.setState({
            displayModal: false
        })
    }

    handleValidationInputChange(e) {
        this.validationKey = e.target.value;
    }

    handlePasswordChange(e) {
        this.Password = e.target.value;
    }

    handlePasswordRepeatChange(e) {
        this.PasswordRepeat = e.target.value;
    }



    async handleSendMail() {
        var val = document.getElementById('email').value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            this.setState({
                EmailStructureValid: true
            })
        } else {
            this.setState({
                EmailStructureValid: false
            })
        }
        if (!this.email) {
            this.setState({
                EmailInvalid: true
            })
        } else {
            this.setState({
                EmailInvalid: false
            })
        }

        if(this.email && this.state.EmailStructureValid ){
            await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/restorePassword' : PATHS.REACT_APP_PATH_PROD + '/restorePassword', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    eMail: this.email,

                })
            }).then(res => {
                if(res.status === 200){
                    
                    this.displayModal();
                } else {
                    alert('Leider konnten wir ihnen keine Mail zukommen lassen. Bitte versuchen sie es erneut')
                }
            })

            

        }
    }
        
        async handleRestorePassword (){
            var pw = document.getElementById('pw').value;
            if (pw.match(/\d{1,}/) && pw.match(/[a-zA-ZäöüÄÖÜ]{1,}/) && pw.match(/\W/)) {
                this.setState({
                    PasswordStructureValid: true
                })
            } else {
                
                this.setState({
                    PasswordStructureValid: false
                })
            }
            if (!this.Password) {
                this.setState({
                    PasswordInvalid: true
                })
            } else {
                this.setState({
                    PasswordInvalid: false
                })
            }
            if (!this.PasswordRepeat) {
                this.setState({
                    PasswordRepeatInvalid: true
                })
            } else {
                this.setState({
                    PasswordRepeatInvalid: false
                })
            }
            if (!this.validationKey) {
                this.setState({
                    validationKeyInvalid: true
                })
            } else {
                this.setState({
                    validationKeyInvalid: false
                })
            }
            
        if(this.Password && this.validationKey && this.PasswordRepeat && !this.state.PasswordStructureValid){
            
        await fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/restorePassword/code'  : PATHS.REACT_APP_PATH_PROD + '/restorePassword/code' , {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                frontendCode: this.validationKey,

            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data){
                    console.log("1")
                     fetch(isLocalhost ? PATHS.REACT_APP_PATH_LOCAL + '/restorePassword/changePassword'  : PATHS.REACT_APP_PATH_PROD + '/restorePassword/changePassword' , {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            newPassword: this.Password,
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if(data.Password = this.Password){
                            alert("Das Passwort wurde erfolgreich geändert.")
                        }
                        else{
                            alert("Leider konnten wir ihr Passwort nicht ändern, Bitte versuchen sie es erneut.")
                        }
                    })
        
                }
                else{
                    alert("Es ist ein Fehler aufgetreten. Bitte Versuchen sie es erneut.")
                }
                
                
            })
            

            this.undisplayModal();
        
    }
}
    render() {
        return (

            <React.Fragment>
                <div className="password-container">
                    <div className="forgot-password-header">Passwort vergessen?</div>
                    <div className="alert-message">Keine Sorgen! Geben Sie Ihre E-Mail Adresse ein und wir unterstützen sie, Ihre Passwort wiederherzustellen.</div>
                    <div className="input-field-container">
                        <p className="label">E-Mail Adresse</p>
                        <input id="email" type="text" className="e-mail-address" placeholder="Geben Sie Ihre E-Mail Adresse ein." onChange={(e) => this.handleEmailInput(e)}style={this.state.EmailInvalid || !this.state.EmailStructureValid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                        <p className="form-validation-registration" style={this.state.EmailInvalid ? void (0) : { display: 'none' }}>Email ist ein Pflichtfeld.</p>
                        <p className="password-restore-text" style={!this.state.EmailStructureValid & !this.state.EmailInvalid ? void (0) : { display: 'none' }}>Bitte Email überprüfen!</p>
                        <button className="send-email" onClick={this.handleSendMail}>E-Mail schicken </button>
                    </div>


                    <div className="back-to-login"><p className="back-to-login-text" onClick={this.redirectToLogin}>ZÜRUCK ZUM LOGIN</p></div>

                </div>

                <Modal show={this.state.displayModal} modalClosed={() => this.undisplayModal()}>
                    <Icon className='close-modal' onClick={this.undisplayModal} size={'100%'} icon={cross} />
                    <div className="modal-content">
                        <h1 className="password-reset-head">Passwort Zurücksetzen</h1>
                        <p className="email-info">der Validation Key wurde ihnen per E-Mail zugeschickt.</p>
                        <input className="password-restore-input" type="text" placeholder="Validation-Code-eingeben" onChange={(e) => this.handleValidationInputChange(e)} style={this.state.validationKeyInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                        <p className="password-restore-text" style={this.state.validationKeyInvalid ? void (0) : { display: 'none' }}>Validation Key ist ein Pflichtfeld.</p>

                        <input className="password-restore-input" id ="pw"type="text" placeholder="Neues Passwort eingeben" onChange={(e) => this.handlePasswordChange(e)} style={this.state.PasswordInvalid || !this.state.PasswordStructureValid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                        <p className="password-restore-text" style={this.state.PasswordInvalid ? void (0) : { display: 'none' }}>Password ist ein Pflichtfeld.</p>
                        <p className="password-restore-text" style={!this.state.PasswordStructureValid && !this.state.PasswordInvalid ? void (0) : { display: 'none' }}>Passwort muss einen Buchstaben, eine Zahl und ein Sonderzeichen enthalten.</p>

                        <input className="password-restore-input" type="text" placeholder="Neues Passwort wiederholen" onChange={(e) => this.handlePasswordRepeatChange(e)} style={this.state.PasswordRepeatInvalid || this.state.PasswordEqualInvalid ? { borderColor: 'red', boxShadow: 'none' } : void (0)}></input>
                        <p className="password-restore-text" style={this.state.PasswordRepeatInvalid ? void (0) : { display: 'none' }}>Password wiederholen ist ein Pflichtfeld.</p>
                        <p className="password-restore-text" style={this.state.PasswordEqualInvalid ? void (0) : { display: 'none' }}>Password ist nicht identisch.</p>

                        <button className="password-change" onClick={this.handleRestorePassword}>Password ändern</button>
                    </div>
                </Modal>

            </React.Fragment>






        )




    }



}
// Method to check if localhost
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

