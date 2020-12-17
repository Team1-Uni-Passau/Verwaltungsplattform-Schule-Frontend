import React from 'react'
import { Redirect, Route } from "react-router-dom";

 const AuthentificatedRoute = ({component: Component ,...rest}) => (
    <Route
        {...rest}
        render = { props => 
            JSON.parse(localStorage.getItem("loggedIn")) && JSON.parse(localStorage.getItem("loggedIn")).token && rest.allowedRole === JSON.parse(localStorage.getItem("loggedIn")).role &&
            JSON.parse(localStorage.getItem("loggedIn")).loggedIn ? (
                <Component {...props}/>        
            ) : (
                    <Redirect
                        to = {{
                            pathname: "/login",
                            state: { from: props.location}
                        }}
                    />
                )}    
    />
);

export default AuthentificatedRoute;