import React from 'react';
import { render, waitForElement } from '@testing-library/react';
// import fetch, { Response } from 'node-fetch';
import FetchDetailItem from './FetchDetailItem';

jest.mock('node-fetch');

test('it renders detail data', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => ({
        name: 'Sample Detail'
      })
    })
  );
  const { getByText } = render(
    <FetchDetailItem label="Label" urls={['sample-url']} scope="name" />
  );

  const component = await waitForElement(() => getByText('Sample Detail'));

  expect(component).toBeTruthy();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('sample-url');
});

test('it renders empty string on failure', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.reject({
      err: 'unknown'
    })
  );

  const { getByTestId } = render(
    <FetchDetailItem label="Label" urls={['sample-url']} scope="name" />
  );

  const component = await waitForElement(() => getByTestId('detailItemText'));

  expect(component).toBeTruthy();
  // FetchDetailItem passes its content to DetailItem, in the case of empty string props.children is undefined
  expect(component.innerText).toBeUndefined();
});
