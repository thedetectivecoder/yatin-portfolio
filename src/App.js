import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { MainSection } from './Components/MainSection/';
import { AboutSection } from './Components/AboutSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <MainSection></MainSection>
      <AboutSection></AboutSection>
    </Router>
  );
}

export default App;
