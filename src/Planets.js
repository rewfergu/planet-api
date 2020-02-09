import React from "react";
import Planet from "./Planet";

const Planets = ({ planetList }) => {
  return planetList.results ? (
    planetList.results.map(planet => <Planet key={planet.name} info={planet} />)
  ) : (
    <div> nothing found </div>
  );
};

export default Planets;
