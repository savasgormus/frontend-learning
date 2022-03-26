import "./Item.css";


const item = ({card}) => {
  return (
    <div className="card">
        <img className="card-logo" src={card.img} alt="logo" />
        <h3 className="card-title">{card.name}</h3>
        {console.log(card)}
       </div>
  )
}

export default item