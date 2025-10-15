import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Tours from './pages/Tours'
import TourLayout from './pages/TourLayout'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:slug" element={<TourLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
