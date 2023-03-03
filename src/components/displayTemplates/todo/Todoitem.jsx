import React, { useState } from 'react';

export default function Todoitem(props) {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked);
    }

    return(<li className='w3-display-container' style={{textDecoration : clicked ? 'line-through':null}}>
    {props.text}
    <span
      onClick={handleClick}
      className='w3-button w3-transparent w3-display-right'
    >
      &times;
    </span>
  </li>)
};
