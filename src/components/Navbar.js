import React, { Component } from 'react'
import "./navbar.css";
import { Link} from 'react-router-dom';




export default class Navbar extends Component {
  render() {
    return (
      
      <div className='nav-container'>
         <nav className="navbar navbar-expand-lg fixed-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
      <span>N</span>avbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about' >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to='/contact'>Contact</Link>
        </li>
        <li className="nav-item">
          < Link href="#" className="nav-link " to='/login'>Log_in</Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link " to='/register'>Alumni_registration</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>

      </div>
    
      
    );
  }
}
