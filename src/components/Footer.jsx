import React, { useState, useEffect } from "react";

function Footer() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data)) 
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Liste des Pays</h1>
      <div className="row">
        {countries.map((country) => (
          <div className="col-md-4 mb-3" key={country.cca3}>
            <div className="card p-3">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">
                  Capitale : {country.capital ? country.capital[0] : "N/A"}
                </p>
                <p className="card-text">Population : {country.population}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
