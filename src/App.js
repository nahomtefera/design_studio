import React, { Component } from 'react';
import './app.css';
import Header from './components/header/header';
import Headline from './components/headline/headline';
import ServicesPanel from './components/services-panel/services-panel';
import Portfolio from './components/portfolio/portfolio';
import GetSupport from './components/getsupport/getsupport';
import GetStarted from './components/getstarted/getstarted';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="app-header"/>
        <Headline className="app-headline"/>
        <ServicesPanel />
        <Portfolio />
        <GetSupport />
        <GetStarted />
      </div>
    );
  }
}

export default App;
