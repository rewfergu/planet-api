import React from 'react';
import Planet from './Planet';

export default function PlanetPage(props) {
  if (props.planetList && props.planetList.results) {
    const thisPlanet = props.planetList.results.filter(item =>
      RegExp(`/planets/${props.planetId}/$`).test(item.url)
    );
    // console.log('this planet: ', thisPlanet);
    return <div data-testid="planetPage"><Planet info={thisPlanet[0]} /></div>;
  } else {
    return <div data-testid="planetPage">Nothing was found.</div>;
  }
}
