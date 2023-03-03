import React from 'react'

export default function Notes (props) {
  return (
    <div className='w3-row-padding w3-twothird'>
      <p style={{ fontFamily: 'Albert Sans' }}>{props.text}</p>
    </div>
  )
}
