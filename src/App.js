import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default App;
