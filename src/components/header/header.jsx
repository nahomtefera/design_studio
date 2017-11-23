import React, {Component} from 'react';
import './header.css';
import logo from '../../images/humansdesign-logo.png';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navIsVisible: false,
        }

        this.toggleNavBar = this.toggleNavBar.bind(this);
    }

    toggleNavBar () {
        const currentState = this.state.navIsVisible;

        this.setState ({navIsVisible: !currentState})
    }

    render () {
        return(
            <div className="header">
                <div className="navigation-bar">
                    <div className="logo-container">
                        <img className="header-logo" src={logo} alt="logo"/>
                    </div>
                    <div className={this.state.navIsVisible ? "nav-list-container show" : "nav-list-container hide"}>
                        <ul className="nav-list">
                            <li>Categories</li>
                            <li>Price</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <i className="fa fa-bars toggle-navbar" onClick={this.toggleNavBar} aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default Header;