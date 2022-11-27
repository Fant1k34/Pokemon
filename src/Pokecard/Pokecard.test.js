import { render, screen } from '@testing-library/react';
import Pokecard from './Pokecard';

test('renders learn react link', () => {
  render(<Pokecard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
