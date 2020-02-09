import React, { useState, useEffect } from "react";
import "./styles.css";

import Planets from "./Planets";

export default function App() {
  const [planets, addPlanets] = useState({});
  useEffect(() => {
    console.log("use effect is running...");
    fetch("https://swapi.co/api/planets")
      .then(response => response.json())
      .then(data => {
        addPlanets(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Planets planetList={planets} />
    </div>
  );
}
