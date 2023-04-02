import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';

import {BrowserRouter as  Router,Routes,Route} from 'react-router-dom'
// import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Project from './components/Skills/Project';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}   />
        <Route path='/Services' element={<Services/>}   />
        <Route path='/Skills' element={<Skills/>}   />
        <Route path='/Project' element={<Project/>}   />
        <Route path='/Contact' element={<Contact/>}   />
        

        
      </Routes>

      </Router>
    </div>
  );
}

export default App;
