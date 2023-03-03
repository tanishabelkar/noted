import React from 'react'

export default function Sidebar () {
  return (
    <div className='w3-sidebar w3-bar-block' style={{ width: '20%' }}>
      <a
        href='#'
        className='w3-bar-item w3-button'
        style={{ fontFamily: 'Albert Sans' }}
      >
        All
      </a>
      <a
        href='#'
        className='w3-bar-item w3-button'
        style={{ fontFamily: 'Albert Sans' }}
      >
        To-Do Lists
      </a>
      <a
        href='#'
        className='w3-bar-item w3-button'
        style={{ fontFamily: 'Albert Sans' }}
      >
        Cornell Notes
      </a>
      <a
        href='#'
        className='w3-bar-item w3-button'
        style={{ fontFamily: 'Albert Sans' }}
      >
        Journal Entries
      </a>
      <a
        href='#'
        className='w3-bar-item w3-button'
        style={{ fontFamily: 'Albert Sans' }}
      >
        About
      </a>
    </div>
  )
}
