import React, {Component} from 'react';
import './getstarted.css';
import GetReadyImg from '../../images/get-ready.jpg'

class GetStarted extends Component {

    render() {
        return (
            <div className="get-started">
                <br/>
                <br/>
                <div className="get-started-container">
                    {/* <img src={GetReadyImg} className="get-started-img" alt="start to run"/>  */}
                    <br/>
                    <br/>
                    <br/>
                    <button className="headline-call-action-button">Let's start</button>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}

export default GetStarted;