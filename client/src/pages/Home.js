import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      <div>
        <h1 className="homeTitle">HOLLOW VALLEY</h1>
        <div className="homeLinks">
          <div className="homeFlip">
            <Link to="/cards" className="homeImage">
              <img src="https://i.imgur.com/xOYeoN5.png" />
              <h2 className="showHover">DECK</h2>
            </Link>
          </div>
          <div className="homeFlip">
            <Link to="/dailypull" className="homeImage">
              <img src="https://i.imgur.com/XMmGJrz.png" />
              <h2 className="showHover">RANDOM</h2>
            </Link>
          </div>
          <div className="homeFlip">
            <Link to="/createcard" className="homeImage">
              <img src="https://i.imgur.com/RMBZDMv.png" />
              <h2 className="showHover">CREATE</h2>
            </Link>
          </div>
          <div className="homeFlip"></div>
          <Link to="/about" className="homeImage">
            <img src="https://i.imgur.com/wP1PF2T.png" />
            <h2 className="showHover">ABOUT</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
