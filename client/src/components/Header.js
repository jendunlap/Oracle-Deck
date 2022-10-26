import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="headerLink">
          HOME
        </Link>
        <Link to="/dailypull" className="headerLink">
          RANDOM PULL
        </Link>
        <Link to="/cards" className="headerLink">
          THE DECK
        </Link>
        <Link to="/createcard" className="headerLink">
          CREATE CARD
        </Link>
        <Link to="/mycards" className="headerLink">
          MY CARDS
        </Link>
        <Link to="/about" className="headerLink">
          ABOUT
        </Link>
      </nav>
    </header>
  )
}

export default Header
