import React from 'react';
import Avatar from './Avatar';

import { render } from '@testing-library/react';

const terrain = 'jungle, rainforests';

test('renders container dimensions', () => {
  const { getByTestId } = render(
    <Avatar data-testid="avatar" size={30} terrain={terrain} />
  );
  const component = getByTestId('avatar');

  expect(component).toHaveAttribute('width', '30');
  expect(component).toHaveAttribute('height', '30');
});

test('renders a planet', () => {
  const { getByTestId } = render(
    <Avatar data-testid="avatar" size={30} terrain={terrain} />
  );
  const component = getByTestId('planetGraphic');
  expect(component).toHaveAttribute('fill', '#598e59');
});

test('renders a default color if none is provided', () => {
  const { getByTestId } = render(
    <Avatar data-testid="avatar" size={30} terrain={''} />
  );
  const component = getByTestId('planetGraphic');
  expect(component).toHaveAttribute('fill', '#719490');
});
