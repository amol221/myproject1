import React from 'react'

import {  Button, Container,NavLink,Row } from 'react-bootstrap'

import "./landingpage.css";
const Landingpage = () => {
 
  return (
    <div className='main'>
        <Container>
           <Row>
            <div className='intro-text'>
              <div>
                <h1 className='title' style={{color:'black'}}>
                    Welcome to SPPU
                </h1>
                <p className='subtitle'>you alumni's </p>
              </div>
              <div className='buttoncontainer'>
                <NavLink href='/login'>
                    <Button className='landingbtn' varient="outline-primary">Log_in</Button>
                    </NavLink>

                    <NavLink href="/register">
                    <Button varient="outline-primary">SignUp</Button>
                </NavLink>
              </div>
              
            </div>
    
           </Row>

        </Container>
       
    </div>
  )
}

export default Landingpage;