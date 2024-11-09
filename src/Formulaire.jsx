// Formulaire.jsx
import React, { useState, useEffect } from 'react';

const Formulaire = () => {
  const [theme, setTheme] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [cout, setCout] = useState('');
  const [expertId, setExpertId] = useState('');
  const [experts, setExperts] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/experts2')
      .then(response => response.json())
      .then(data => setExperts(data))
      .catch(error => console.error('Error fetching experts:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const expert = experts.find(exp => exp.id === parseInt(expertId));
  const duration = (new Date(dateFin).getTime() - new Date(dateDebut).getTime()) / (1000 * 60 * 60 * 24);
  const totalCost = cout * duration;

  return (
    <div className="container mt-4">
      <h2>Formulaire de l'événement</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Théme</label>
          <input 
            type="text" 
            className="form-control" 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Date de début</label>
          <input 
            type="date" 
            className="form-control" 
            value={dateDebut} 
            onChange={(e) => setDateDebut(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Date de fin</label>
          <input 
            type="date" 
            className="form-control" 
            value={dateFin} 
            onChange={(e) => setDateFin(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Coût</label>
          <input 
            type="number" 
            className="form-control" 
            value={cout} 
            onChange={(e) => setCout(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Expert</label>
          <select 
            className="form-control" 
            value={expertId} 
            onChange={(e) => setExpertId(e.target.value)} 
            required
          >
            <option value="">Choisir un expert</option>
            {experts.map(exp => (
              <option key={exp.id} value={exp.id}>{exp.nom_complet}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Confirmer</button>
      </form>
      
      {submitted && expert && (
        <div className="mt-4">
          <h3>Informations saisies</h3>
          <p><strong>Théme:</strong> {theme}</p>
          <p><strong>Date de début:</strong> {dateDebut}</p>
          <p><strong>Date de fin:</strong> {dateFin}</p>
          <p><strong>Coût:</strong> {cout} DH</p>
          <p><strong>Expert:</strong> {expert.nom_complet}</p>
          <p>L’expert {expert.nom_complet} assurera le théme {theme}, avec un coût journalier de {cout}DH, pour une durée de {duration} jours, soit un coût total de {totalCost}DH.</p>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
