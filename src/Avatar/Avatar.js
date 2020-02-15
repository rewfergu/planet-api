import React, { useEffect, useRef, useState } from 'react';
import colors from '../colors';

export default function Avatar(props) {
  const circle = useRef(null);
  const [state, setState] = useState({
    radius: Math.random() * 20 + 20,
    color: '#719490'
  });
  useEffect(() => {
    if (props.terrain) {
      setState(s => ({
        ...s,
        color: colors[props.terrain.split(', ')[0]]
      }));
    }
  }, [props.terrain]);
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
        r={state.radius}
        strokeWidth="1"
        stroke="rgba(0,0,0,0.25)"
        fill={state.color}
      />
    </svg>
  );
}
