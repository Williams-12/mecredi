import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Footer from './components/Footer.jsx'
// import SideBar from './components/SideBar.jsx'
// import NavBar from './components/partials/NavBar.jsx'
import DefiOne from './components/partials/DefiOne.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Footer /> */}
    {/* <SideBar /> */}
    <DefiOne />


  </StrictMode>,
)
