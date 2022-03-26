import "./Card.css"
import { languages } from "../../helpers/data";
import Item from "../item/Item";

const Card = () => {
    return(
        <div className="cards-area-container">
            {/* <div className=""></div> */}
            <h3 className="language-title">Languages</h3>
            <div className="cards-container">
            {
                languages.map ((item, index) => {
                    return(
                        <Item card={item} key={index} />
                        )
                    })}
                    </div>
        </div>
    );
};

export default Card;