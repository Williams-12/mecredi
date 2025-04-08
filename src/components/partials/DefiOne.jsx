import React, { useState } from 'react';

const DefiOne = () => {    
  const [nom, setNom] = useState('');
  const [nomSoumis, setNomSoumis] = useState('');
  const body = (event) => {
    setNom(event.target.value);
      };
    
  const submit = (event) => {
    event.preventDefault();
    setNomSoumis(nom)
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulaire</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
         <input
          type="text"
      className="form-control"
          placeholder="Entrez votre nom"
          value={nom}
          onChange={body}
        />
        </div>
        <button className="btn btn-primary" type="submit">Soumettre</button>
      </form>

      {nomSoumis && (
        <div className="card mt-4">
        <div className="card-body">
          <p className="card-text">Bienvenu <strong>{nomSoumis}</strong> !</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default DefiOne;
