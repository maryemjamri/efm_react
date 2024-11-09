// Experts1.jsx
import React from 'react';
import expertsData from './db';  

function Experts1() {
  return (
    <div>
      <h1>Liste des Experts et leurs événements</h1>
      <ul>
        {expertsData.map((expert) => {
          const totalCost = expert.événements.reduce(
            (total, event) => total + event.cout_journalier * event.durée,
            0
          );

          return (
            <li key={expert.id}>
              <h2>{expert.nom_complet}</h2>
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
                    <strong>Coût Total de l'événement:</strong> {event.cout_journalier * event.durée} DH
                    <br />
                    <hr />
                  </li>
                ))}
                <li>
                  <strong>Total des coûts des événements assurés est : </strong> {totalCost} DH
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experts1;
