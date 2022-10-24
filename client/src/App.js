import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import DailyPull from './pages/DailyPull'
import AllCards from './pages/AllCards'
import Create from './pages/Create'
import MyCards from './pages/MyCards'
import CardInfo from './pages/CardInfo'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dailypull" element={<DailyPull />} />
          <Route path="/cards" element={<AllCards />} />
          <Route path="/createcard" element={<Create />} />
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/cards/:cardId" element={<CardInfo />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
