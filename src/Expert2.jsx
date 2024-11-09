// Experts2.jsx
import React, { useState, useEffect } from 'react';

const Experts2 = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/experts2')
      .then(response => response.json())
      .then(data => setExperts(data))
      .catch(error => console.error('Error fetching experts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Liste des Experts et leurs événements</h2>
      <ul>
        {experts.map(expert => (
          <li key={expert.id}>
            <h3>{expert.nom_complet}</h3>
            <ul>
              {expert.événements.map((event, index) => (
                <li key={index}>
                  <strong>Thème:</strong> {event.thème}
                  <br />
                  <strong>Date de début:</strong> {event.date_debut}
                  <br />
                  <strong>Date de fin:</strong> {event.date_fin}
                  <br />
                  <strong>Description:</strong> {event.description}
                  <br />
                  <strong>Coût Journalier:</strong> {event.cout_journalier} DH
                  <br />
                  <strong>Durée:</strong> {event.durée} jours
                  <br />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts2;
