import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/partials/Footer.jsx'
import SideBar from './components/SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBar />


  </StrictMode>,
)
