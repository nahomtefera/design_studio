import React, {Component} from 'react';
import headline_image from '../../images/phone-hand-mockup.png';
import './headline.css';

class Headline extends Component {

    render() {
        return (
            <div className="headline-container">
                <div className="headline-main">
                    <div className='headline-text-container'>
                        <p className="headline-text">
                            Doing what
                            <br/>
                            we do best so
                            <br/>
                            that you don't have to    
                        </p>     
                    </div>
                    <div className="headline-img-container">
                        <img className="headline-img" src={headline_image} alt="hand holding a phone"/>
                    </div>
                    <div className="headline-services-container">
                        <br/>
                        <p className="headline-services">
                            Contact us to get the best service
                            <br/>
                            for the best price.
                            <br/>
                            <br/>
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i> Excelent Customer service
                            <br/>
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i> Outstanding results
                        </p>                        
                    </div>
                    <div className="headline-call-action-container">
                        <br/>
                        <div className="headline-call-action">
                            <button className="headline-call-action-button">
                                Let's start!
                            </button>
                            <div className="headline-call-action-info">
                            <br/>
                                How it works
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headline;