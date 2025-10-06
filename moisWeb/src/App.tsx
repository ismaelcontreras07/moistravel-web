import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Tours from './pages/Tours'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
