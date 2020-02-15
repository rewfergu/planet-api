import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { css, Global } from '@emotion/core';

import Planets from './Planets/Planets';
import PlanetPage from './PlanetPage/PlanetPage';

const globalStyles = css`
  html,
  body {
    min-height: 100%;
  }
  body {
    font-size: 16px;
    font-family: sans-serif;
    text-align: center;
    color: #676767;
    background: linear-gradient(rgb(47, 181, 208) 0%, rgba(2, 0, 36, 1) 100%);
    min-height: 100%;
  }
`;

export default function App() {
  const [planets, addPlanets] = useState({});
  useEffect(() => {
    console.log('use effect is running...');

    fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(data => {
        addPlanets(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <div className="App">
        <h1 style={{ color: 'white' }}>Planets API Demo</h1>
        <Router>
          <PlanetPage path="/planets/:planetId" planetList={planets} />
          <Planets path="/" planetList={planets} />
        </Router>
      </div>
    </React.Fragment>
  );
}
