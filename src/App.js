import React, { useState, useEffect } from 'react';
import './App.css';
import brands from './brands';
import processBrand from './process_brand';
import processor from './processor';
import RotateRightIcon from './rotate-right-solid.svg'; // Importieren des SVG-Icons für das Rotieren

function App() {
  const [formData, setFormData] = useState({
    brand: '',
    processor_brand: '',
    processor: '',
    internal_storage: '',
    ram: '',
    battery_capacity_mAh: '',
    rar_camera_total_mp: '',
    front_camera_mp: '',
    disp_size_inch: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [programReady, setProgramReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const connectToServer = () => {
    setLoading(true);
    fetch('https://phone-jrzf.onrender.com/phone_price_prediction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPrediction(data.prediction);
        setLoading(false);
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        setErrorMessage(
          'Es ist ein Fehler bei der Verbindung mit dem Server aufgetreten. Bitte überprüfen Sie Ihr Netzwerk oder haben Sie Geduld, bis die Verbindung mit dem Server wieder hergestellt ist'
        );
      });
  };

  useEffect(() => {
    if (
      formData.brand !== '' &&
      formData.processor_brand !== '' &&
      formData.processor !== '' &&
      formData.internal_storage !== '' &&
      formData.ram !== '' &&
      formData.battery_capacity_mAh !== '' &&
      formData.rar_camera_total_mp !== '' &&
      formData.front_camera_mp !== '' &&
      formData.disp_size_inch !== ''
    ) {
      setProgramReady(true);
      connectToServer(); // Verbinde mit dem Server, wenn das Formular fertig ist
    } else {
      setProgramReady(false);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Keine Verbindung beim Absenden des Formulars, da wir bereits eine Verbindung beim Aktualisieren der Formulare hergestellt haben
      // Hier wird die Verbindung mit dem Server hergestellt, wenn die Formularfelder aktualisiert werden
      connectToServer();
  };

  const handlePageRefresh = () => {
    window.location.reload(); // Aktualisiere die Seite
  };

  useEffect(() => {
    // Die Fortschrittsleiste wird animiert, während der Ladevorgang stattfindet
    let progressInterval;
    if (loading) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 10));
        setProgressPercentage((prevPercentage) => (prevPercentage >= 90 ? 90 : prevPercentage + 10)); // Aktualisiere den Fortschrittsprozentsatz
      }, 1000);
    } else {
      clearInterval(progressInterval);
    }
    return () => clearInterval(progressInterval);
  }, [loading]);

  return (
    <div className="App">
      <h1>Handy Preisvorhersage</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Marke:
          <select name="brand" value={formData.brand} onChange={handleChange}>
              <option value="">Bitte wählen</option>
            {brands.map((brand, index) => (
            <option key={index} value={brand}>
            {brand}
            </option>
          ))}
          </select>
        </label>
        <label>
          Prozessor Marke:
          <select name="processor_brand" value={formData.processor_brand} onChange={handleChange}>
              <option value="">Bitte wählen</option>
            {processBrand.map((processBrand, index) => (
            <option key={index} value={processBrand}>
            {processBrand}
            </option>
          ))}
          </select>
        </label>
        <label>
          Prozessor:
          <select name="processor" value={formData.processor} onChange={handleChange}>
              <option value="">Bitte wählen</option>
            {processor.map((processor, index) => (
            <option key={index} value={processor}>
            {processor}
            </option>
          ))}
          </select>
        </label>
        <label>
          Interner Speicher (GB):
          <input
            type="number"
            name="internal_storage"
            value={formData.internal_storage}
            onChange={handleChange}
            placeholder="z.B. 128"
          />
        </label>
        <label>
          RAM (GB):
          <input
            type="number"
            name="ram"
            value={formData.ram}
            onChange={handleChange}
            placeholder="z.B. 3"
          />
        </label>
        <label>
          Batteriekapazität (mAh):
          <input
            type="number"
            name="battery_capacity_mAh"
            value={formData.battery_capacity_mAh}
            onChange={handleChange}
            placeholder="z.B. 4100"
          />
        </label>
        <label>
          Hauptkamera Auflösung (MP):
          <input
            type="number"
            name="rar_camera_total_mp"
            value={formData.rar_camera_total_mp}
            onChange={handleChange}
            placeholder="z.B. 64"
          />
        </label>
        <label>
          Frontkamera Auflösung (MP):
          <input
            type="number"
            name="front_camera_mp"
            value={formData.front_camera_mp}
            onChange={handleChange}
            placeholder="z.B. 12"
          />
        </label>
        <label>
          Displaygröße (Zoll):
          <input
            type="number"
            name="disp_size_inch"
            value={formData.disp_size_inch}
            onChange={handleChange}
            placeholder="z.B. 6.5"
          />
        </label>
        <button type="submit" disabled={!programReady || loading} className="prediction-button">
          {loading ? 'laden...' : 'Vorhersage erhalten'}
        </button>

        <div onClick={handlePageRefresh} className="button-with-icon no-background">
        <img src={RotateRightIcon} alt="Refresh Icon" className="icon" />
        </div>


        {loading && (
        <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%`, position: 'relative' }}>
      {progressPercentage}% <span className="additional-text">geladen</span>
      </div>
      </div>
        )}
    </form>
    {programReady && !loading && (
      prediction !== null ? (
    <p className="predicted-price">Vorhergesagter Preis: <span className="price">{(prediction !== undefined) ? prediction.toFixed(2)+' €' : 'Überprüfe mal die Eingaben'}</span></p>
    ) : (
    <p className="error-message">{errorMessage}</p>
    )
    )}

    </div>
  );
}

export default App;
