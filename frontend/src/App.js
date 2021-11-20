import React, {  useState } from 'react';

import './App.css';
import api from './services/api';
//import * as d3 from 'd3';

import temperatureImg from './assets/temperatura.png';
import humidityImg from './assets/umidade.png';

function App() {
  const [hidden, setHidden] = useState(true);

  function getFeedbacks() {
    api.get('feedbacks')
    .then((response) => {
      console.log(response.data);
    })
  }

  function getTemperatureRandom() {
    return (Math.random() * (39 - 16) + 16);
  }

  function getHumidityRandom(min=0, max=100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function btnClose() {
    setHidden(true);
  }

  function btnPleasant() {
    giveFeedback('Agradavel');
    setHidden(false);
  }

  function btnHot() {
    giveFeedback('Quente');
    setHidden(false);
  }

  async function btnCold() {
    giveFeedback('Frio');
    setHidden(false);
  }

  async function giveFeedback(data) {
    const feedback = {feedback: data}

    await api.post('feedback', feedback);
  }

  return (
    <div className="App">
        <div className="group">
          <div className="temperature">
            <img src={temperatureImg} alt='temperatura' />
            <strong>Temperatura:</strong>
            <strong>{getTemperatureRandom().toFixed(2)}ºC</strong>
          </div>
          <div className="humidity">
            <img src={humidityImg} alt='umidade' />
            <strong>Umidade:</strong>
            <strong>{getHumidityRandom()}%</strong>
          </div>
        </div>
        <div className="feedback">
          <p>Você acha que a sala está: </p>
          <div className="btn-group">
            <button id='btn-feedback' onClick={btnPleasant}>Agradável</button>
            <button id='btn-feedback' onClick={btnHot}>Quente</button>
            <button id='btn-feedback' onClick={btnCold}>Fria</button>
          </div>
        </div>

       {!hidden && (
          <div  className="popup"> 
            <p>Obrigado pelo seu feedback!</p>
            <button id="close" onClick={btnClose} >x</button> 
        </div>
       )}
    </div>
  );
}

export default App;
