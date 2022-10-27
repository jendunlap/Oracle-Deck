const Card = (props) => {
  return (
    <>
      {props.base ? (
        <div className="cardDiv" onClick={() => props.onClick(props.id)}>
          <div className="imgageWrapper">
            <img className="cardImage" src={props.image} alt={props.name}></img>
          </div>
          <div className="infoWrapper">
            <h1>{props.name}</h1>
          </div>
        </div>
      ) : (
        <div className="cardDivBlack" onClick={() => props.onClick(props.id)}>
          <div className="imgageWrapper">
            <img
              className="cardImageBlack"
              src={props.image}
              alt={props.name}
            ></img>
          </div>
          <div className="infoWrapper">
            <h1>{props.name}</h1>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
