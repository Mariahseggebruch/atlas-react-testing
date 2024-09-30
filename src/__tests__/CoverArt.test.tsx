// CoverArt.test.tsx
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt'

it('renders CoverArt with an image', () => {
	const { container } = render(<CoverArt imageUrl="https://example.com/album-cover.jpg" />);
	expect(container).toMatchSnapshot(); 
  });
  
  it('renders CoverArt with a placeholder if no image is provided', () => {
	const { container } = render(<CoverArt imageUrl="" />);
	expect(container).toMatchSnapshot(); 
  });
  