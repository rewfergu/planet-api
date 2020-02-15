import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from '@reach/router';
import App from './App';

// saved response from the real api
import data from './data.json';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => data
  })
);

function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

test('navigation works properly', async () => {
  const {
    container,
    getByTestId,
    history: { navigate }
  } = await waitForElement(() => renderWithRouter(<App />));

  // we should be on the home page
  expect(getByTestId('planetsContainer')).toBeTruthy();

  // switch to a different page
  await navigate('/planets/4/');
  expect(getByTestId('planetPage')).toBeTruthy();
  expect(container.innerHTML).toContain('Hoth');
});
