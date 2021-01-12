import React from 'react';
import Navbar from './Shared/NavBar/Navbar';
import Footer from './Shared/Footer/Footer'
import Blog from './Blog/Blog';
import Photography from './Photography/Photography';
import Apps from './Apps/Apps'
import About from './About/About'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path={`*/apps`} >
              <Apps />
            </Route>
            <Route path={`*/photography`}>
              <Photography />
            </Route>
            <Route path={`*/about`}>
              <About />
            </Route>
            <Route exact path={`*/`}>
              <Blog />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
