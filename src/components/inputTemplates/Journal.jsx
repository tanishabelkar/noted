import { Done } from '@mui/icons-material'
import { Box, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Journal () {
  const [note, setNote] = useState({})

  function handleChange(event) {
    let {name, value} = event.target

    if(name === 'Title') {
      setNote({...note, Title: value})
    }
    if(name === 'Content') {
      setNote({...note, Content: value})
    }
    console.log(note);
  }

  const date = new Date().toLocaleDateString()
  return (
    <div>
      <Box
        component='form'
        autoComplete='off'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
        }}
      >
        <h6>{date}</h6>
        <div>
          <TextField
            name='Title'
            placeholder='Note title'
            variant='standard'
            value={note.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name='Content'
            multiline
            minRows={4}
            variant='standard'
            placeholder='Take a note...'
            value={note.content}
            onChange={handleChange}
          />
        </div>
        <div>
          <IconButton color='success' centerRipple='true'>
            <Done />
          </IconButton>
        </div>
      </Box>
    </div>
  )
}
