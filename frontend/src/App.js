import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';
import api from './services/api';

import temperatureImg from './assets/temperatura.png';
import humidityImg from './assets/umidade.png';

function App() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);

  /* useEffect(() => {
    api.get('sensor?sensor=temperatureSensor')
      .then(res => {
        setTemperatureData(res.data);
      })

    api.get('sensor?sensor=humiditySensor')
    .then(res => {
      setHumidityData(res.data);
    })
  }) */

  

  return (
    <div className="App">
        <div className="group">
          <div className="temperature">
            <img src={temperatureImg} />
            <strong>Temperatura:</strong>
            <strong>26ºC</strong>
          </div>
          <div className="humidity">
            <img src={humidityImg} />
            <strong>Umidade:</strong>
            <strong>100%</strong>
          </div>
        </div>
        <div className="feedback">
          <p>Você acha que a sala está: </p>
          <div className="btn-group">
            <button>Agradável</button>
            <button>Quente</button>
            <button>Fria</button>
          </div>
        </div>
    </div>
  );
}

export default App;
