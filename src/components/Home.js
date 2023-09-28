import React, { Component } from 'react'
import Card from './Card';
import Custom from './Custom'
import Cdata from './Cdata';
import "./home.css"
import headerimg from "./../headerimg.jpg"


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
            <button className='btn-i'> Discover More !</button>

          </div>

        </div>
      </div>
      </div>
     
      <Custom/>
      <div className='wrapper'>
      {Cdata.map(function Dcard(val){
         return(
          
         <Card
          cardtitle ={val.cardtitle}
          imgsrc={val.imgsrc}
          link={val.link}
        /> 
       
      );
})}
       </div>
      </>
     
    
     
      
     
    )
  }
}
