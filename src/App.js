import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/Home';
import Explorer from './pages/Explorer';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">


          {/* Route */}
          <Route exact path="/" component={ Home }/>
          <Route exact path="/explorer-strasbourg" component={ Explorer }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
