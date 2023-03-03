import React from 'react'

export default function Heading(params) {
    return(<header className='w3-container w3-pale-red'>
        <h2 style={{fontFamily: 'Playfair Display'}}>{params.title}</h2>
    </header>)
};
