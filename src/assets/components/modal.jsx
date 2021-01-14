import React from 'react';
import '../stylesheets/modal.css';
import Backdrop from './backdrop';

export default class Modal extends React.Component {
    
    
    constructor (props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                
                    className= "Modal"
                     style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        maxHeight: '70%',
                        overflow: 'auto'
                     }}
                    >
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }



}
