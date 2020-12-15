import React from 'react'
import { Redirect, Route } from "react-router-dom";

 const AuthentificatedRoute = ({component: Component ,...rest}) => (
    <Route
        {...rest}
        render = { props => 
            localStorage.getItem("token") && rest.allowedRole === localStorage.getItem("role") ? (
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