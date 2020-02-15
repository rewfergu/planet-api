import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import PlanetPage from './PlanetPage';

import data from '../data.json';

test('we can render a planet page', () => {
  const { getByText, getByTestId } = render(
    <PlanetPage planetList={data} planetId={4} />
  );

  expect(getByTestId('planetPage')).toBeTruthy();
  expect(getByText('Hoth')).toBeTruthy();
});

test('we can render a message if no planets are found', () => {
  const { queryByText, getByTestId } = render(<PlanetPage planetId={4} />);

  expect(getByTestId('planetPage')).toBeTruthy();
  expect(queryByText('Hoth')).not.toBeInTheDocument();
  expect(queryByText('Nothing was found.')).toBeInTheDocument();
});
