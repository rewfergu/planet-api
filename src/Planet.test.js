import React from 'react';
import { render, wait, waitForElement } from '@testing-library/react';
import Planet from './Planet';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => ['sample']
  })
);

const planetData = {
  name: 'Hoth',
  rotation_period: '23',
  orbital_period: '549',
  diameter: '7200',
  climate: 'frozen',
  gravity: '1.1 standard',
  terrain: 'tundra, ice caves, mountain ranges',
  surface_water: '100',
  population: 'unknown',
  residents: [],
  films: ['https://swapi.co/api/films/2/'],
  created: '2014-12-10T11:39:13.934000Z',
  edited: '2014-12-20T20:58:18.423000Z',
  url: 'https://swapi.co/api/planets/4/'
};

describe('render planet', () => {
  test('render overview for a planet', () => {
    const { getByText, queryByTestId } = render(<Planet info={planetData} />);
    expect(getByText('Hoth')).toBeInTheDocument();
    expect(queryByTestId('population')).toContainHTML('unknown');
    expect(queryByTestId('climate')).toContainHTML('frozen');
    expect(queryByTestId('terrain')).not.toBeInTheDocument();
  });

  test('render extended details for a planet on click', async () => {
    const { queryByText, queryByTestId } = render(<Planet info={planetData} />);
    queryByText('Details').click();
    let terrain;
    await wait(() => terrain = queryByTestId('terrain'));
    expect(queryByTestId('population')).toContainHTML('unknown');
    expect(queryByTestId('details')).toBeInTheDocument();
    expect(terrain).toContainHTML('tundra, ice caves, mountain ranges');
  });
});
