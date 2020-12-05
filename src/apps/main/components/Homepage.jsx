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

export default class Homepage extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
            type: "password",
            displayModal: false,
            showAnswers: [],
            displaySideNavigation: false
        }


        this.changeType = this.changeType.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.undisplayModal = this.undisplayModal.bind(this);
        this.displayAnswer = this.displayAnswer.bind(this);
        this.redirectAboutUs = this.redirectAboutUs.bind(this);
        this.openSideNavigation = this.openSideNavigation.bind(this);
        this.closeSideNavigation = this.closeSideNavigation.bind(this);
        this.displayModal2 = this.displayModal.bind(this);
        
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
                        <input className="username" type="text" placeholder="Benutzername"></input>
                        <input className="username" type="text" placeholder="E-Mail Adresse eingeben"></input>
                        <input className="username" type="password" placeholder="Passwort"></input>
                        <input className="username" type="password" placeholder="Passwort wiederholen"></input>
                        <input className="username" type="text" placeholder="Registrierungscode"></input>
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