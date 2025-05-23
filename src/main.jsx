import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path="/login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
