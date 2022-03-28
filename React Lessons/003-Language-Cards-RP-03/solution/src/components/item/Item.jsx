import { useState } from "react";
import "./Item.css";

const item = ({ card }) => {
    const [showLogo, setShowLogo] = useState(true);


    return (
        <div className="card">
            <div>
                <img className="card-logo" src={card.img} alt="logo" />
                <h3 className="card-title">{card.name}</h3>
                {/* {console.log(card)} */}
            </div>
            <ul className="list">
                {card.options.map((option,index) => {
                    return (
                        <li key={index}>{option}</li>
                    )
                })}

            </ul>
        </div>
    );
};

export default item;
