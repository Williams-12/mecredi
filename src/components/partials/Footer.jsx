import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <nav className="d-flex gap-3">
          <a href="/" className="text-light text-decoration-none">Accueil</a>
          <a href="/profil" className="text-light text-decoration-none">Profil</a>
          <a href="/form" className="text-light text-decoration-none">Form</a>
        </nav>
        <p className="mb-0">&copy; 2025, Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
