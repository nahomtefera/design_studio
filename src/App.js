import React, { Component } from 'react';
import './app.css';
import Header from './components/header/header';
import Headline from './components/headline/headline';
import ServicesPanel from './components/services-panel/services-panel';
import RequestDesign from './components/request-design/request-design';
import Portfolio from './components/portfolio/portfolio';
import GetSupport from './components/getsupport/getsupport';
import GetStarted from './components/getstarted/getstarted';
import Footer from './components/footer/footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start_request: true,
      service_requested: "",
    }

    this.startRequest = this.startRequest.bind(this);
    this.closeRequest = this.closeRequest.bind(this);
  }

  // This function will open the window to start the process
  // of chosing/requesting a service
  startRequest(){
    this.setState({
      start_request: true,
    });
    window.scrollTo(0, 0)
  }
  // This function will close the window to pause the process
  // of chosing/requesting a service
  closeRequest(){
    this.setState({
      start_request: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header className="app-header"/>
        <Headline className="app-headline"/>
        <ServicesPanel start_request={this.startRequest} />
        <RequestDesign 
          className={this.state.start_request ? 
            "show":
            "hide"
          }
          closeRequest={this.closeRequest}
          serviceRequested={this.state.service_requested}
        />
        <Portfolio />
        <GetSupport />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
