// import React from 'react'

// function NavBar() {

//     const Home = () => <h2>Accueil</h2> ;
//     const About = () => <h2>About</h2> ;
//     const Contact = () => <h2>Contact</h2> ;

//   return (
//     <Router>
//         <nav>
//         <link to = "/"  >Accueil</link> |
//         <link to = "/about"  >About</link> |
//         <link to = "/contact"  >Contact</link> 
//         </nav>

//         <Routes>
//             <Route path= "/" element= { <Home /> } />
//             <Route path= "/about" element= { <About /> } />
//             <Route path= "/contact" element= { <Contact /> } />
//         </Routes>
//     </Router>
//   );
// }

// export default NavBar


import React, { useState, useEffect } from 'react';

function NavBar() {
  const [users, setUsers] = useState([]);  // État pour stocker les utilisateurs

  useEffect(() => {
    // Appel à l'API pour récupérer les utilisateurs
    fetch('http://192.168.7.11:8080/api/users/67efb41a398349146f21c8ca')
      .then(response => response.json())  // Convertir la réponse en JSON
      .then(data => setUsers(data));  // Mettre à jour l'état avec les utilisateurs récupérés
  }, []);  // L'effet s'exécute une seule fois au montage du composant

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>  // Afficher chaque nom d'utilisateur
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
