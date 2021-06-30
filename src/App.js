import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function App() {
  let width = window.innerWidth;
    if(width > 768) {
      return (
        <div className="App">
          <SideBar />
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <SideBar />
        </div>
      );
    }
}

export default App;
