import React from 'react'
import Todoitem from './Todoitem'

export default function Todolist (props) {
  return (
    <div className='w3-container'>
      <header className='w3-container w3-pale-blue'><h2 style={{fontFamily: 'Playfair Display'}}>{props.title}</h2></header>
      <div className='w3-container'>
        <ul className='w3-ul' style={{fontFamily: 'Albert Sans'}}>
          {props.todo.map(t => {
            return (
              <Todoitem
                text = {t}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
