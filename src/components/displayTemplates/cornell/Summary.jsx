import React from 'react'

export default function Summary (props) {
  return (
    <div className='w3-container w3-topbar'>
      <h4 style={{ fontFamily: 'Playfair Display' }}>Summary</h4>
      <p style={{ fontFamily: 'Albert Sans' }}>{props.sum}</p>
    </div>
  )
}
