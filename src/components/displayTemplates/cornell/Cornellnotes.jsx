import React, { useState } from 'react'
import Keywords from './Keywords'
import Notes from './Notes'
import Title from './Title'
import Summary from './Summary'

export default function Cornellnotes (props) {
  return (
    <div className='w3-container'>
      <Title title={props.title} />
      <div className='w3-container'>
        <Keywords keywords={props.keywords} />
        <Notes text={props.note} />
      </div>

      <Summary sum={props.summary} />
    </div>
  )
}
