const Symbol = (props) => {
  return (
    <div className="symbolImage">
      <div className="imgageWrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="infoWrapper">
        <h3>{props.name}</h3>
        <ul>
          {props.keywords.map((keyword, index) => (
            <li className="symbolsList" key={index}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Symbol
