import React from 'react';
import { Link } from '@reach/router';
import Planet from '../Planet/Planet';

export default function PlanetPage(props) {
  if (props.planetList && props.planetList.results) {
    const thisPlanet = props.planetList.results.filter(item =>
      RegExp(`/planets/${props.planetId}/$`).test(item.url)
    );
    return (
      <div data-testid="planetPage">
        <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
          Home
        </Link>
        <Planet info={thisPlanet[0]} />
      </div>
    );
  } else {
    return <div data-testid="planetPage">Nothing was found.</div>;
  }
}
