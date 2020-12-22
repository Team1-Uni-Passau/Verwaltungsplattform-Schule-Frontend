import React from 'react';
import NotFoundImage from '../../../assets/images/404.jpg'
import '../stylesheets/Homepage.css'

export default class notFound extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {

        }

        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    redirectToLogin () {
        window.location.href = "/login";
    }

        
    render() {
        return (
            <React.Fragment>
               <img src={NotFoundImage} className="not-found"/>
               <button className="back-to-login-404" onClick={this.redirectToLogin}>Zurück zum Login</button>
            </React.Fragment>

           
            
           

            
        )
        
    

        
    }



}