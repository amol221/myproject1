import React, { Component } from 'react'

import Card from './Card';
import Custom from './Custom'
import "./home.css"
import headerimg from "./../headerimg.avif"






export default class Home extends Component {
  render() {
    return (
      <>
      <div className='header'>
    
      <div>
       <div className='img'>
          <img src={headerimg} alt=""/>
        
          <div className="headercontent">
            <h5>Welcome </h5>
            <h4> Alumni<br/>to SPPU
            </h4><p>we Aim to creat a 
              good bond between you and us</p>
            <button className='btn'> Discover More !</button>

          </div>

        </div>
      </div>
      </div>
     
      <Custom/>
      <Card/>
     
    
     
      </>
     
    )
  }
}
