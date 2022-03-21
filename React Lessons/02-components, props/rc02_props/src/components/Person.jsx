import React from 'react'
import Message from './Message'

function Person(props) {
    console.log(props);
    const {name, img, tel} = props
  return (
    <div>
        <Message />
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person