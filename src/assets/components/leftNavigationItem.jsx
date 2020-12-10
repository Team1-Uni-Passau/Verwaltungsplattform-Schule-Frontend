import React from 'react';
import '../stylesheets/leftnavigationitem.css';

export default class leftNavigationItem extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }

        this.redirectToRespectivePage = this.redirectToRespectivePage.bind(this);
    }

    redirectToRespectivePage() {
        switch(this.props.title){
            case "Ankündigungen":
                window.location.href = "/sekretariat/events";
                break;
            case "Krankmeldungen":
                window.location.href = "/sekretariat/sicknotes";
                break;
            case "Wochenpläne":
                window.location.href = "/sekretariat/schedule";
                break; 
            default:
                void(0);      
        }
    }
    

    render() {
        return (
            <div className="left-navigation-item-container" onClick={this.redirectToRespectivePage}>
                <img className="left-navigation-item-image" src={this.props.img}/>
                <p className="left-navigation-item-title" style={this.props.selected ? {color: 'red'} : void(0)}>{this.props.title}</p>
            </div>
        )
    }



}