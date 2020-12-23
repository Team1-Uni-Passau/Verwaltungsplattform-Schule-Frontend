import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import '../stylesheets/admin.css';
import TopBar from '../../../assets/components/topBar';
//import Demo from './Demo';
  

export default class schedule extends React.Component {
    
    
    constructor (props){
        super(props);
        this.state = {
        }
    }
    


    render() {

        return (
            <div className="admin-home">
                <LeftNavigation selected="Wochenpläne" />
                <div className="flex-right-container">
                    <TopBar/>
                    <div className="middle-panel-container" style={{overflow:'hidden'}}>
                      <div className="demo">
                        {/* <Demo/> */}
                      </div>
                    </div>
                </div>
            </div>
        )
    }



}