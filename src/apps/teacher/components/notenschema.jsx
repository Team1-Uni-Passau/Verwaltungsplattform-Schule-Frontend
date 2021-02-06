import React from 'react';
import LeftNavigation from '../../../assets/components/LeftNavigation';
import TopBar from '../../../assets/components/topBar';
import Schema from '../../../assets/components/notenschema';

export default class Notenschema extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }      
    }


    render() {

        return (
            <div className="home">
                <LeftNavigation selected="Notenshema erstellen" />
                <div className="flex-right-container">
                    <TopBar />
                    <div className="middle-panel">
                        <Schema/>
                    </div>
            </div>
        </div>
        )
    }



}
