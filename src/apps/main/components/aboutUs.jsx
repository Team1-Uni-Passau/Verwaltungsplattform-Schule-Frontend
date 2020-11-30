import React from 'react';
import '../stylesheets/aboutus.css'
import '../stylesheets/Homepage.css'
import Mission from './mission';
import Footer from '../../../assets/components/footer';
import Galerie from './galerie';
import Story from './story';

export default class aboutUs extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
            selectedTab: "UNSERE MISSION"
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


        const items = ["UNSERE GESCHICHTE" , "UNSERE MISSION", "GALERIE"];

        let vue = null;

        switch (this.state.selectedTab) {
            case "UNSERE GESCHICHTE":
                vue = <Story/>
                break;
            case "UNSERE MISSION":
                vue = <Mission/>
                break;
            case "GALERIE":
                vue = <Galerie/>
                break;
            default:
                vue = <Story/>
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

                <div className="body-aboutus">
                    {vue}
                </div>

                <Footer/>
                

            </div>
        )
    }



}