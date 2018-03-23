import React, {Component} from 'react';
import './request-design.css';
import LogoRequest from '../logo-request/logo-request';
import close_icon from '../../images/icons/close-icon.png';


class RequestDesign extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={this.props.className + " request-container"}>
                <img src={close_icon} 
                    alt="close button"
                    onClick={this.props.closeRequest}
                />
                <div className="request">
                     <LogoRequest />
                </div>
            </div>
        )
    }
}

export default RequestDesign;