import React from 'react'
const h2Style = {
    color:  "red",
    backgroundColor: "aqua"
}

function Header() {
    return (   
    <div>
        <h1 style= {{backgroundColor: "blue"}}>Clarusway</h1>
        <h2 style = {h2Style}>Reinvent yourself</h2>
    </div>
    )
}

export default Header