import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'
import BankContext from './Context/BankContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BankContext>
    <UserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext>
    </BankContext>
  </StrictMode>,
)
