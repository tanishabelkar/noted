import React from 'react'

export default function Title (props) {
  return (
    <div className='w3-container w3-pale-green w3-center w3-bottombar'>
      <h2 style={{ fontFamily: 'Playfair Display' }}>
        {props.title}
      </h2>
    </div>
  )
}
