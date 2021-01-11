import React from 'react';
import Navbar from './Shared/NavBar/Navbar'
import About from './About/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <About />
      </div>
    </div>
  );
}

export default App;
