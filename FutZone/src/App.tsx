import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { PageSearch } from './pages/PageSearch'

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<PageSearch />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
