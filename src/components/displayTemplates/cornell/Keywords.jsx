import React from 'react'
import Keyword from './Keyword'

export default function Keywords (props) {
  return (
    <div className='w3-row-padding w3-third w3-rightbar'>
      <h4 style={{ fontFamily: 'Playfair Display' }}>Keywords</h4>
      <ul className='w3-ul'>
        {props.keywords.map(k => {
          return <Keyword keyword={k} />
        })}
      </ul>
    </div>
  )
}
