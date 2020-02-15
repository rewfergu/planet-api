import React from 'react';
import Button from './Button';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const handleClick = jest.fn(() => 'click');

describe('basic button', () => {
  const { getByText } = render(<Button onClick={handleClick}>Details</Button>);
  const component = getByText('Details');

  test('it renders a button', () => {
    component.click();
    expect(component).toBeInTheDocument();
  });

  test('it renders a click', () => {
    component.click();
    expect(handleClick.mock.calls.length).toBe(1);
  });
});
