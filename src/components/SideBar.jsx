import React from 'react';

const SideBar = () => {
  return (
    <div className="d-flex flex-column bg-dark text-light p-3 vh-100" style={{ width: '250px' }}>
      <h4 className="text-center mb-4">Menu</h4>
      <nav className="nav flex-column">
        <a href="/" className="nav-link text-light">Accueil</a>
        <a href="/profil" className="nav-link text-light">Profil</a>
        <a href="/form" className="nav-link text-light">Form</a>
        <a href="/settings" className="nav-link text-light">Paramètres</a>
      </nav>
    </div>
  );
};

export default SideBar;
