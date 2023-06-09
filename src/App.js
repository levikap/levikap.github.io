import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import './Mobile.css';
import SideBar from './components/sidebar.js';
import NavBar from './components/navbar.js';
import About from './components/about.js';
import Research from './components/research.js';
import Publications from './components/publications.js';
import Work from './components/work.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends Component {
  render() {
    let width = window.innerWidth;
    if(width > 768) {
    return(
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
    6     <title>Levi Kaplan Portfolio</title>
    7     <link rel="stylesheet" href="./App.css" />
        </Helmet>
      <div className="App">
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
          </div>
      </Fragment>
    );
  } else {
    return(
      <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
  6     <title>Levi Kaplan Portfolio</title>
  7     <link rel="stylesheet" href="./Mobile.css" />
      </Helmet>
      <div className="App"></div>
      </Fragment>
    );
  }
  }
}

export default App
