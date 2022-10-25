import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <nav>
        <Link to='/' className="headerLink">Home</Link>
        <Link to='/dailypull' className="headerLink">Daily Pull</Link>
        <Link to='/cards' className="headerLink">Deck</Link>
        <Link to='/mycards' className="headerLink">My Cards</Link>
        <Link to='/createcard' className="headerLink">Create Card</Link>
        <Link to='/about' className="headerLink">About</Link>
      </nav>
    </header>
  )
}

export default Header