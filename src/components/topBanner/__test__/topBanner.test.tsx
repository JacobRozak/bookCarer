import React from 'react';
import { render, screen } from '@testing-library/react';
import TopBanner from '../topBanner'

test('renders the herop description', () => {
  render(<TopBanner />);
  const abstract = screen.getByText(/Here you'll be able to scheadule your carers visit/i);
  expect(abstract).toBeInTheDocument();
});

// test('renders the header', () => {
//   render(<TopBanner />);
//   const title = screen.getByTitle(/Carers/i)
//   expect(title).toBeInTheDocument();
// });

test('check if Banner element renders', () => {
  const {container} = render(<TopBanner />);
  expect(container).toBeInTheDocument();
});