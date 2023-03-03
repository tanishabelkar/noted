import React from 'react'
import Header from './Header'
import Journal from './inputTemplates/Journal'
import Sidebar from './Sidebar'


export default function App () {
  return (
    <div>
      <Header />
      <Sidebar />
      <div style={{marginLeft:'20%'}}>
      <Journal/>
        {/* <Cornellnotes
          title={'Class 1'}
          keywords={['data', 'structure', 'algorithm']}
          note={
            'Imagine traveling to a new country and you don’t know how to speak their native language. When you enter the world of programming, English and all the languages you know become alien to the computer. You need to have clear communication with your computer and the only way to do that is by learning the ABCDs of a programming language.'
          }
          summary={
            'DSA is important. DS used to store data in different forms. Algorithm is how you perform an action.'
          }
        />

        <Todolist
          title={'Shopping list'}
          todo={['milk', 'coffee', 'cheese', 'almonds']}
        />
        
        <Note
          title={'My note'}
          text={
            "i have no idea what i am doing is right but like what's the worst that could happen?"
          }
        /> */}
      </div>
    </div>
  )
}
