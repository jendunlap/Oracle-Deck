import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homePage">
      {/* <div>Hollow Valley</div> */}
      <div>
        <div className="startLinks">
          <Link to="/dailypull">Daily Pull</Link>{' '}
          <Link to="/cards">All Cards</Link>
          <Link to="/createcard">Create a Card</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
