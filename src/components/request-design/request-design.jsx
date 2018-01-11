import React, {Component} from 'react';
import './request-design.css';
import LogoRequest from '../logo-request/logo-request';

class RequestDesign extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className + " request-container"}>
                <div className="request">
                     <LogoRequest />
                </div>
            </div>
        )
    }
}

export default RequestDesign;