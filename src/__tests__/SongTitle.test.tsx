// SongTitle.test.tsx
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

it('renders SongTitle with title and artist', () => {
  const { container } = render(
    <SongTitle title="Song Title" artist="Artist Name" />
  );
  expect(container).toMatchSnapshot();
});

it('renders SongTitle with missing artist', () => {
  const { container } = render(
    <SongTitle title="Song Title" artist="" />
  );
  expect(container).toMatchSnapshot();
});