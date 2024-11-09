
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Quize from './pages/Quize'
import Home from './pages/Home'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quize' element={<Quize />} />
    </Routes>
  )
}

export default App
