import React from 'react';
import Planet from '../Planet/Planet';

const Planets = ({ planetList }) => {
  return (
    <div data-testid="planetsContainer">
      {planetList.results ? (
        planetList.results.map(planet => (
          <Planet key={planet.name} info={planet} />
        ))
      ) : (
        <div> nothing found </div>
      )}
    </div>
  );
};

export default Planets;
