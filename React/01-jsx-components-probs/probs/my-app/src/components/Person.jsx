import React from 'react'

function Person({name, surname, tel}) {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{surname}</h1>
        <h1>{tel}</h1>
    </div>
  )
}

export default Person