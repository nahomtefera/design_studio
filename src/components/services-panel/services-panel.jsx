import React, {Component} from 'react';
import './services-panel.css';

class ServicesPanel extends Component {

    render() {
        return (
            <div className="services-container">
                <div className="items">
                    <div className="item-duo">
                        <div className="services-item crimson">LOGOS</div>
                        <div className="services-item cadetblue">WEBSITES</div>
                    </div>
                    
                    <div className="services-item item-main grey">BUSINESS</div>

                    <div className="item-duo">
                        <div className="services-item yellow">BRAND</div>
                        <div className="services-item orange">IDENTITY</div>
                    </div>
                    

                    <div className="item-duo">
                        <div className="services-item red">SONGS</div>
                        <div className="services-item cadetblue">WRITERS</div>
                    </div>

                </div>
                <br/><br/>
                <button className="services-btn-more">
                    Show More
                </button>
                <br/><br/>
                <div className="bar"></div>
                <br/>
            </div>
        )
    }
}

export default ServicesPanel;