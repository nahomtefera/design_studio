import React, { Component } from 'react';
import './app.css';
import Header from './components/header/header';
// import Headline from './components/headline/headline';
// import ServicesPanel from './components/services-panel/services-panel';
// import Portfolio from './components/portfolio/portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header className="app-header"/>
         {/* <Headline className="app-headline"/>
         <ServicesPanel />
         <Portfolio /> */}
      </div>
    );
  }
}

export default App;
