import React from "react";

const myStyle = {
    parag: {
        color: "blue",
        fontSize: "2rem",
        fontWeight: "bolder",
    },
    div: {
        backgroundColor: "green",
        fontSize: "3.2rem",
    },
};

const Inline = () => {
    return (
        <>
            <div style={{ backgroundColor: "red", color: "#fff" }}>
                <h1>Hello inline css</h1>
                <div style={myStyle.div}>
                    <p style={myStyle.parag}>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    );
};

export default Inline;
