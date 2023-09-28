import './App.css';
import './bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Contact1 from './components/Contact1';
import Log_in from './components/loginscreen/Log_in';
import Admin from "./components/Admin";

import Alumni_registration from './components/Register';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import Userprofile from './components/Userprofile';





function App() {
  return (
    <div className="App">

      <Header />
      <main style={{minheight:"93vh"}}>
        <Routes>
          <Route path='/profile' element={<Userprofile/>}/>
          <Route path='/' element={<Landingpage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Log_in />} />
          <Route path='/register' element={<Alumni_registration />} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </main>
      <hr/>
    <Footer />
    </div>










  );
}

export default App;
