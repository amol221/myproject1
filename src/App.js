import './App.css';
import {Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Contact1 from './components/Contact1';
import Log_in from './components/Log_in';
import Navbar from './components/Navbar';
import Alumni_registration from './components/Register';





function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar/>
        
   
     
      <Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/contact/new' element={<Contact1/>}/>
  <Route path='/login' element={<Log_in/>}/>
  <Route path='/register' element={<Alumni_registration/>}/> 
</Routes>
      </div>
      
      <Footer/>
   
   
   
   
    
   
      
     
   
     </div>
  );
}

export default App;
