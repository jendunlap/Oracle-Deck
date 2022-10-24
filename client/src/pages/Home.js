import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      <div>
        <h1>HOLLOW VALLEY</h1>
        <div className="homeLinks">
          <Link to="/dailypull" className="homeImage">
            Daily Pull
          </Link>
          <Link to="/cards" className="homeImage">
            All Cards
          </Link>
          <Link to="/createcard" className="homeImage">
            Create a Card
          </Link>
          <Link to="/about" className="homeImage">
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
