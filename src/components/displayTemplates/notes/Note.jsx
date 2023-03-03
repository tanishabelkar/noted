import React from 'react'
import Heading from './Heading'

export default function Note (props) {
  return (
    <div className='w3-container'>
      <Heading title={props.title} />
      <div className='w3-container'> <p style={{fontFamily: 'Albert Sans'}}>{props.text}</p> </div>
    </div>
  )
}
