import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';


export default class events extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
    //     console.log(JSON.parse(localStorage.getItem("loggedIn")))
    // }




    render() {
        return (
            <div className="parents-home">
                <LeftNavigation selected="" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container">
                    </div>
                </div>
            </div>
        )
    }



}