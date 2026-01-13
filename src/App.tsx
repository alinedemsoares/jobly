import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/shared/Navbar'
import Home from './pages/Home'
import Optimizer from './pages/Optimizer'
import Tracker from './pages/Tracker'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/optimizer" element={<Optimizer />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App