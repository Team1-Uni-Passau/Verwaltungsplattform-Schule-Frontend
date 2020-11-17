import React from 'react';
import '../stylesheets/backdrop.css';


export default class Backdrop extends React.Component {
    
    
    constructor (props){
        super(props);
    }

    render() {
        return (
            this.props.show ? <div className={'Backdrop'} onClick={this.props.clicked}></div> : null   
        )
    }



}
