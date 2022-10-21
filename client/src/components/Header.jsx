import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/dailypull'>Daily Pull</Link>
        <Link to='/cards'>Deck</Link>
        <Link to='/mycards'>My Cards</Link>
        <Link to='/createcard'>Create Card</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  )
}

export default Header