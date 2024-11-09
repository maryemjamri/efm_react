// Evenement.jsx
import React from 'react';
import expertsData from './db';

const Evenement = ({ expertId }) => {
  const expert = expertsData.find(exp => exp.id === expertId);

  if (!expert) {
    return <div className="alert alert-danger">Aucun expert trouvé</div>;
  }

  const totalCost = expert.événements.reduce((sum, event) => sum + (event.cout_journalier * event.durée), 0);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">{expert.nom_complet}</h3>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Thème</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Description</th>
            <th>Coût Journalier</th>
            <th>Durée (jours)</th>
            <th>Coût Total Event</th>
          </tr>
        </thead>
        <tbody>
          {expert.événements.map((event, index) => (
            <tr key={index}>
              <td>{event.thème}</td>
              <td>{event.date_debut}</td>
              <td>{event.date_fin}</td>
              <td>{event.description}</td>
              <td>{event.cout_journalier} DH</td>
              <td>{event.durée}</td>
              <td>{event.cout_journalier * event.durée} DH</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className="text-right font-weight-bold">Total des coûts des événements assurés est :</td>
            <td className="font-weight-bold">{totalCost} DH</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Evenement;
