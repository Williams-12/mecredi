import React from 'react'

function Footer() {
  return (
    // footer
    <footer>
        
        <div>
        <a href="">Accueil</a><br />
        <a href="">Profil</a>
    </div>
    <form action="">
        <h4>Contactez-nous !</h4>
        <label>Nom: <input type="text" placeholder='votre nom' /></label><br />
        <label>Email: <input type="text" placeholder='Email' /></label><br />
        <button>Envoyez</button>
    </form>
    Tous droits reserver || 2025, <a href="">conditions d'utilisateur</a>
    </footer>
  )
}

export default Footer