import React from 'react'
import "./Card.scss"

const Card = ({ veri }) => {


    console.log({ veri });
    return (
        <div className='container'>

            {veri.map((eleman) => {
                const { id, countries, img, capital, population } = eleman;
                return (
                    <div className='card' key={id}>
                        <h1>{countries}</h1>
                        <img className='img' src={img} alt="" />
                        <h2>{capital}</h2>
                        <h2>{population}</h2>
                        <button className='card--small'>Small</button>
                        <button className='card--large'>Large</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Card