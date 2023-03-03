import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Todoitem from '../displayTemplates/todo/Todoitem'

export default function ToDoList () {
  const [todolist, setTodolist] = useState({})

  return (
    <div>
      <TextField
        variant='standard'
        name='Title'
        value={todolist.title}
        placeholder='Title'
      />
      {todolist.items.map(i => {
        <Todoitem text={i} />
      })}
    </div>
  )
}
