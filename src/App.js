import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';


function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
