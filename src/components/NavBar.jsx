import React from 'react'

function NavBar() {
  return (
    <div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>
            <a href="#home">Accueil</a>
            <a href="#profil">Profil</a>
            <a href="#form">Forms</a>
          </div>
    </div>
  )
}

export default NavBar