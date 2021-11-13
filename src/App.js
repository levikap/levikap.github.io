import React, { Component, Fragment } from 'react';
import './App.css';
import SideBar from './components/sidebar.js';
import NavBar from './components/navbar.js';
import About from './components/about.js';
import Research from './components/research.js';
import Publications from './components/publications.js';
import Work from './components/work.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className="App">

        <Fragment>
          <BrowserRouter>
            <div>
              <SideBar />
              <NavBar />
              <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/work" element={<Work />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Fragment>
      </div>
    );
  }
}

export default App
