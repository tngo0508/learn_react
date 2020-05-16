import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact name="John Doe" email="jdoe@gmail.com"
          phone="777-777-7777"
        />
        <Contact name="Karen Smith" email="ksmith@gmail.com"
          phone="777-777-7123"
        />
      </div >
    );
  }
}

export default App;
