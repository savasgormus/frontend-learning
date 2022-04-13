import React from 'react'

const myStyle = {
    parag: {
        color: "green",
        fontSize: "2rem",
        fontWeight: "bolder"
    },
    div: {
        backgroundColor: "gray",
        fontSize: "3.2rem"
    }
}

const Inline = () => {
    return (
        <>
            <div style={{
                backgroundColor: "red",
                color: "#fff"
            }}>
                <h1>Hello World!</h1>
                <div style={myStyle.div}>
                    <p style={myStyle.parag}>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    )
}

export default Inline