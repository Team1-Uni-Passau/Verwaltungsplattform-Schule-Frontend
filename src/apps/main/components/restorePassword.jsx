import React from 'react';
import '../stylesheets/restorePassword.css';

export default class restorePassword extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }


    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);

    }


    handleEmailInput(){
        console.log("nothing")
    }

    redirectToLogin() {
        window.location.href = "/";
    }



    render() {
        return (
            <React.Fragment>
                <div className="password-container">
                    <div className="forgot-password-header">Passwort vergessen?</div>
                    <div className="alert-message">Keine Sorgen! Geben Sie Ihre E-Mail Adresse ein und wir unterstützen Ihnen, Ihre Passwort wiederherzustellen.</div>
                    <div className="input-field-container">
                        <p className="label">E-Mail Adresse</p>
                        <input type="text" className="e-mail-address" placeholder="Geben Sie Ihre E-Mail Adresse ein." onChange={(e) => this.handleEmailInput(e)}></input>
                        <button className="send-email">E-Mail schicken</button>
                    </div>
                    <div className="back-to-login"><p className="back-to-login-text" onClick={this.redirectToLogin}>ZÜRUCK ZUM LOGIN</p></div>
                </div>
            </React.Fragment>
        )
    }



}