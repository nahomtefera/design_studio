import React, { Component } from 'react';
import './app.css';
import Header from './components/header/header';
import Headline from './components/headline/headline';
import ServicesPanel from './components/services-panel/services-panel';
import Portfolio from './components/portfolio/portfolio';
import GetSupport from './components/getsupport/getsupport';
import GetStarted from './components/getstarted/getstarted';
import Footer from './components/footer/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start_request: false,
      request_servie: "",
    }

    this.startRequest = this.startRequest.bind(this);
    this.pauseRequest = this.pauseRequest.bind(this);
  }

  // This function will open the window to start the process
  // of chosing/requesting a service
  startRequest(){
    this.setState({
      start_request: true,
    })
  }
  // This function will close the window to pause the process
  // of chosing/requesting a service
  pauseRequest(){
    this.setState({
      start_request: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header className="app-header"/>
        <Headline className="app-headline"/>
        <ServicesPanel />
        <Portfolio />
        <GetSupport />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
