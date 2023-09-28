import React from 'react'
import {Card} from 'react-bootstrap'


import'./card.css'

const card = (props) => {
  console.log(props);
  return (
  
    
    <Card className='cards'>
      <a className='card-link' href={props.link}>
      <Card.Img className='image'variant="top" style={{height:'28vh'}}src={props.imgsrc} />
      <Card.Body className='card-text'>
        {props.cardtitle}
      </Card.Body>
      </a>
    </Card>
  
  )
}

export default card


