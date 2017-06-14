import React, { Component } from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Header from './components/Header';
import Start from './components/Start';
import About from './components/About';
import Memes from './components/Memes';
import './App.css';

class App extends Component {
  
  render() {
    let titles = {
      title: "Photo Gallery",
      secondTitle: "and MEMES!"
    }
    return (
      <BrowserRouter>
      <div className="container">
        <Header {...titles} />
      
        <Route exact path="/" component={Start} />
        <Route path="/about" component={About} />
        <Route path="/memes" component={Memes} />
          
      </div>
      </BrowserRouter>
        
    );
  }
}

export default App;
