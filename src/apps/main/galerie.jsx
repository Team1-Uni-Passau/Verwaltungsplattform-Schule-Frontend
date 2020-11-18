import React from 'react';
import '../../assets/stylesheets/galerie.css'
import HomepagePicture from '../../assets/images/Homepage.jpg';


export default class galerie extends React.Component {
    
    
    constructor (props){
        super(props);

        this.state = {
        }
    }


    render() {


        return (
            <React.Fragment>
                <div className="row">
                        <div className="item"/>
                        <div className="item"/>
                        <div className="item"/>
                        <div className="item"/>
                        <div className="item"/>
                        <div className="item"/>
                </div>
            </React.Fragment>
        )
    }



}