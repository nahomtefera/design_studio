import React, {Component} from 'react';
import supportImg from '../../images/support-person.PNG';
import './getsupport.css';

class GetSupport extends Component {

    render() {

        return(
            <div className="get-support-container">
                <br/><br/><br/>
                <div className="get-support-img-container">
                    <img src={supportImg} className="get-support-img" alt="support person"/>
                </div>

                <div className="get-support-info-container">
                    <h3 className="get-support-info-header">Ask</h3>
                    <p className="get-support-info-text">
                        If you want to know anything about
                        <br/>
                        how we work or if we offer any other service
                        <br/>
                        get in touch with us.
                    
                    </p>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }

}

export default GetSupport;
