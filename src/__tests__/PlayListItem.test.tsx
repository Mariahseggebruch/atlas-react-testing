// PlayListItem.test.tsx
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';

it('renders PlayListItem with all details', () => {
  const { container } = render(
    <PlayListItem title="Song Title" artist="Artist Name" length="3:45" />
  );
  expect(container).toMatchSnapshot();
});

it('renders PlayListItem with missing details', () => {
  const { container } = render(
    <PlayListItem title="Song Title" artist="" length="" />
  );
  expect(container).toMatchSnapshot();
});