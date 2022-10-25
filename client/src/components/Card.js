const Card = (props) => {
  return (
    <div className="cardDiv" onClick={() => props.onClick(props.id)}>
      <div className="imgageWrapper">
        <img className="cardImage" src={props.image} alt={props.name}></img>
      </div>
      <div className="infoWrapper">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default Card
