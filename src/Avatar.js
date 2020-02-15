import React, { useEffect, useRef, useState } from 'react';
import colors from './colors';

// const margin = 10;

// function setRadius() {
//   return Math.random() * 20 + 20;
// }

// function setDiff(rad) {
//   return rad + margin;
// }

// function setCoords(diff) {
//   const coords = Math.random() * (100 - diff * 2) + diff;
//   return coords;
// }

export default function Avatar(props) {
  const circle = useRef(null);
  // const [r, set_r] = useState(30);
  // const [cx, set_cx] = useState(50);
  // const [cy, set_cy] = useState(50);
  const planetColor = colors[props.terrain.split(', ')[0]] || '#719490';
  // useEffect(() => {
  // const circle_radius = setRadius();
  // const circle_diff = setDiff(circle_radius);
  // const circle_x = setCoords(circle_diff);
  // const circle_y = setCoords(circle_diff);

  // set_r(circle_radius);
  // set_cx(circle_x);
  // set_cy(circle_y);
  // }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="avatar"
      width={props.size}
      height={props.size}
      viewBox="0 0 100 100"
      {...props}
    >
      <circle cx="50" cy="50" r="50" fill="rgba(0,0,0,0.1)" />
      <circle
        id="circle1"
        data-testid="planetGraphic"
        ref={circle}
        cx={50}
        cy={50}
        r={Math.random() * 20 + 20}
        strokeWidth="1"
        stroke="rgba(0,0,0,0.25)"
        fill={planetColor}
      />
    </svg>
  );
}
