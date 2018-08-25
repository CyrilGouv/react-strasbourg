import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


import Home from './pages/Home';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">


          {/* Route */}
          <Route exact path="/" component={ Home }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
