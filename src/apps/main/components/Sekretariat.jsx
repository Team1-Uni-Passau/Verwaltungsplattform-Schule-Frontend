import React from 'react';
import'../stylesheets/Sekretariat.css'
import Sekretariat_Startseite from './Sekretariat_Startseite';
import Startseite from './Sekretariat_Startseite'


export default class Sekretariat extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
            selectedTab: "STARTSEITE"
        }

        this.redirectToHomepage = this.redirectToHomepage.bind(this);
    }


    selectedTabChanged = (item) => {
        this.setState({
            selectedTab: item
        })
    }

    redirectToHomepage() {
        window.location.href = "/";
    }


    render() {


        const items = ["STARTSEITE"]

        let vue = null

        switch (this.state.selectedTab){
            case "STARTSEITE":
                vue = <Sekretariat_Startseite/>
                    break;
            default:
                vue = <Sekretariat_Startseite/>        
        }
    

    return (
        <div className="aboutus-wrapper">
            
            <header className="navigation-top">
                    <div className="title" onClick={this.redirectToHomepage} style={{cursor:'pointer'}}><b>V</b>erwaltungsplattform Schule</div>
                    <div className="navigation-top-right">
                        {items.map((item,index) => {
                            return <a className="navigation-top-right-item" key={index} style={this.state.selectedTab == item ? {color:"#FF4338"} : void(0)} onClick={ () => this.selectedTabChanged(item)}>{item}</a>
                        })}
                    </div>          
            </header>

            <div className="body-Sekretariat">
                {vue}
            </div>
        </div>

            
     )
}
}


        